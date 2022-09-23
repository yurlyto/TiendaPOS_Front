import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from '../interfaces/categoria';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {
  @Output() editItem = new EventEmitter<Categoria>();
  @Output() deleteItem = new EventEmitter<Categoria>();
  @Input() categorias: Categoria[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  edit(categoria: Categoria) {
    this.editItem.emit(categoria);
    console.log(categoria);
  }
  delete(categoria: Categoria) {
    this.deleteItem.emit(categoria);
    console.log(categoria);
  }

}
