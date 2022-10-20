import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriasComponent } from '../categorias/categorias.component';
import { Categoria } from '../categorias/interfaces/categoria';
import { CategoriasService } from '../categorias/services/categorias.service';
import { Producto } from './interfaces/producto';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [MessageService]
})
export class ProductosComponent implements OnInit {
  upload:boolean=false;
  producto:Producto={
    id: 0,
    descripcion: "",
    codigoBarras: "",
    precio: 0,
    utilidad: 0,
    cantidad:0,
    categoriaId: 0,
    categoria: {
      id: 0,
      descripcion: ""
    },
    imagen: ""
  }
  productos: Producto[]=[];
  categorias:Categoria[]=[];
  constructor(
    private productosService:ProductosService,
    private categoriasService:CategoriasService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.refrescar();
  }
  new(){
    this.producto={
      id: 0,
      descripcion: "",
      codigoBarras: "",
      precio: 0,
      cantidad:0,
      utilidad: 0,
      categoriaId: 0,
      categoria: {
        id: 0,
        descripcion: ""
      },
      imagen: ""
    }
  }
  edit(producto:Producto){
    this.producto=producto;
  }
  crear(producto:Producto){
    this.productosService.crear(producto).subscribe((resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creacion Producto',
          detail:
            `Se ha creado el producto ${producto.descripcion} exitosamente!!!`,
        });
        this.refrescar();
        this.new();
    });
  }
  guardar(producto:Producto){
    this.productosService.guardar(producto).subscribe((resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Edición Producto',
          detail:
            `Se ha guardado el producto ${producto.descripcion} exitosamente!!!`,
        });
        this.producto=producto;
        this.refrescar();
    });
  }
  eliminar(producto:Producto){
    this.productosService.eliminar(producto).subscribe((resp) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Eliminación Producto',
        detail:
          `Se ha eliminado el producto ${producto.descripcion} exitosamente!!!`,
      });
      this.refrescar();
      this.new();
  });
  }
  refrescar(){
    this.productosService.getAll().subscribe((resp) => {
      this.productos = resp;
    });
    this.categoriasService.getAll().subscribe((resp) => {
      this.categorias = resp;
    });
  }
  cambiarImagen(imagen:FormData){
    console.log(imagen.get('imagen'));
    this.upload=true;
    this.productosService.imagen(imagen).subscribe((resp) => {

      this.refrescar();
      this.upload=false;
    });

  }


}
