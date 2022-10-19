import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Producto } from 'src/app/productos/interfaces/producto';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { DetalleVenta } from '../interfaces/detalle-venta';
import { Venta } from '../interfaces/venta';
import { VentasService } from '../services/ventas.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [MessageService]
})
export class IndexComponent implements OnInit {
  productos: Producto[]=[]
  total: number=0;
  venta:Venta={
    id: 0,
    fecha: new Date(),
    clienteId: 1,
    formapagoId: 1,
    formaPago: {
      id: 1,
      descripcion: "Contado",
      credito: false
    },
    detallesVentas: []
  }
  cierre: number=1;
  constructor(
    private messageService:MessageService,
    private productosService:ProductosService,
    private ventasService:VentasService) { }

  ngOnInit(): void {
    this.refrescar();
  }
  agregar(producto:Producto){
    let detalleVenta:DetalleVenta = this.venta.detallesVentas.filter(item => item.productoId === producto.id)[0];
    if (detalleVenta){
      detalleVenta.cantidad++;
      detalleVenta.valor=producto.precio*detalleVenta.cantidad;
    }else{
      detalleVenta={
        id: 0,
        fecha: new Date(),
        ventaId: 0,
        productoId: producto.id,
        producto: producto,
        cantidad: 1,
        valor: producto.precio,
        saldo: 0,
        cierreId: this.cierre
      }

      this.venta.detallesVentas.unshift(detalleVenta)
    }
    if (this.venta.formaPago && this.venta.formaPago.credito){
      detalleVenta.saldo=detalleVenta.valor;
    }
    this.total+=producto.precio;
    producto.cantidad--;
  }

  refrescar(){
    this.productosService.getAll().subscribe((resp) => {
      this.productos = resp;
    });
  }
  vender(){
    if(this.venta.detallesVentas &&this.venta.detallesVentas.length){
      let nuevaVenta:Venta= JSON.parse(JSON.stringify(this.venta)) as Venta;
      delete nuevaVenta['cliente'];
      delete nuevaVenta['formaPago'];
      nuevaVenta.detallesVentas?.forEach(element => {
        delete element.producto
      });
      this.ventasService.crear(nuevaVenta).subscribe((resp) => {
        this.messageService.add({severity:'success', summary:'Vender', detail:'La venta ha sido exitosa!!'});
        this.venta.detallesVentas= [];
        this.refrescar();
      });

    }else{
      this.messageService.add({severity:'warn', summary:'Vender', detail:'No Hay productos en esta venta!!'});
    }
  }

}
