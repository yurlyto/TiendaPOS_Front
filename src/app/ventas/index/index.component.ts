import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { Cliente } from 'src/app/clientes/interfaces/cliente';
import { ClientesService } from 'src/app/clientes/services/clientes.service';
import { Formapago } from 'src/app/formapagos/interfaces/formapago';
import { FormapagosService } from 'src/app/formapagos/services/formapagos.service';
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
  formaPagos:Formapago[]=[];
  productos: Producto[]=[];
  clientes: Cliente[]=[];
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
  form: FormGroup = this.formBuilder.group({
    formapago: [1, Validators.required],
    cliente: [null]
  });


  constructor(
    private formBuilder: FormBuilder,
    private messageService:MessageService,
    private productosService:ProductosService,
    private ventasService:VentasService,
    private formapagosService:FormapagosService,
    private clientesService:ClientesService) { }

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

  refrescarProductos(){
    this.productosService.getAll().subscribe((resp) => {
      this.productos = resp;
    });
    this.venta.detallesVentas= [];
    this.total=0;
  }
  refrescar(){
    this.refrescarProductos();
    this.formapagosService.getAll().subscribe((resp) => {
      this.formaPagos = resp;
      this.form.controls['formapago'].setValue(this.formaPagos[0]);
    });
    this.clientesService.getAll().pipe(
      map((clientes: Cliente[]) => clientes.map(cliente =>{
        cliente.nombrecompleto=cliente.nombres+ ' ' + cliente.apellidos
        return cliente;
      } ))
    ).subscribe((resp) => {
      this.clientes = resp;
      this.form.controls['cliente'].setValue(this.clientes[0]);
    });

  }
  vender(){
    if(this.venta.detallesVentas &&this.venta.detallesVentas.length){
      if(this.venta.clienteId===1 && this.venta.formaPago?.credito){
        this.messageService.add({severity:'warn', summary:'Vender', detail:'No puede asignar una  venta a crédito al cliente de mostrador!!'});
        return;
      }
      if(this.venta.cliente && this.venta.cliente.cupo+this.venta.cliente.saldo<this.total && this.venta.formaPago?.credito){
        this.messageService.add({severity:'warn', summary:'Vender', detail:'Lo sentimos el cliente no tiene cupo, debe abonar o llevar menos articulos!!'});
        return;
      }
      let nuevaVenta:Venta= JSON.parse(JSON.stringify(this.venta)) as Venta;
      delete nuevaVenta['cliente'];
      delete nuevaVenta['formaPago'];
      nuevaVenta.detallesVentas?.forEach(element => {
        delete element.producto
      });
      this.ventasService.crear(nuevaVenta).subscribe((resp) => {
        this.messageService.add({severity:'success', summary:'Vender', detail:'La venta ha sido exitosa!!'});
        this.venta.detallesVentas= [];
        this.total=0;
        this.refrescar();
      });

    }else{
      this.messageService.add({severity:'warn', summary:'Vender', detail:'No Hay productos en esta venta!!'});
    }
  }
  cambioFormapago(){
    this.venta.formaPago=this.form.controls['formapago'].value;
    if(this.venta.formaPago){
      this.venta.formapagoId= this.venta.formaPago.id;
    }
    this.refrescarProductos();
  }
  cambioCliente(){
    this.venta.cliente=this.form.controls['cliente'].value;
    if(this.venta.cliente){
      this.venta.clienteId= this.venta.cliente.id;
    }
  }

}
