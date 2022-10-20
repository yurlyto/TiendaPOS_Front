import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Categoria } from 'src/app/categorias/interfaces/categoria';
import { CategoriasService } from 'src/app/categorias/services/categorias.service';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  @Output() editItem = new EventEmitter<Producto>();
  @Output() deleteItem = new EventEmitter<Producto>();
  @Input() productos: Producto[]=[];
  @Input() categorias: Categoria[]=[];
  @ViewChild('dt') table: Table | undefined;
  constructor(
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {}

  edit(producto: Producto) {
    this.editItem.emit(producto);
    console.log(producto);
  }
  delete(producto: Producto) {
    this.deleteItem.emit(producto);
    console.log(producto);
  }
  filtrar(event: any){
    if(this.table){
      this.table.filter(event.value, 'categoriaId', 'equals')
    }
  }

}
