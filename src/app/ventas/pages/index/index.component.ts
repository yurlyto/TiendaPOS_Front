import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/productos/interfaces/producto';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { DetalleVenta } from '../../interfaces/detalle-venta';
import { Venta } from '../../interfaces/venta';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  productos: Producto[]=[]
  total: number=0;
  venta:Venta={
    id: 0,
    fecha: new Date(),
    clienteId: 0,
    formapagoId: 1,
    formaPago: {
      id: 1,
      descripcion: "Contado",
      credito: false
    },
    detalleVenta: []
  }
  cierre: number=1;
  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    this.refrescar();
  }
  agregar(producto:Producto){
    let detalleVenta:DetalleVenta = this.venta.detalleVenta.filter(item => item.productoId === producto.id)[0];
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

      this.venta.detalleVenta.push(detalleVenta)
    }
    if (this.venta.formaPago.credito){
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

}
