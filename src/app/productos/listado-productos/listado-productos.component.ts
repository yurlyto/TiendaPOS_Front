import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
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

}
