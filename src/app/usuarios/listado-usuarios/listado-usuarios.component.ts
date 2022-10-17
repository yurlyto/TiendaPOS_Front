import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  @Input() usuarios:Usuario[]=[];
  @Output() editItem = new EventEmitter<Usuario>();
  @Output() eliminarItem = new EventEmitter<Usuario>();
  constructor() { }

  ngOnInit(): void {
  }
edit(usuario:Usuario){
this.editItem.emit(usuario);
console.log(usuario);
}
eliminar(usuario:Usuario){
this.eliminarItem.emit(usuario);
console.log(usuario);
}
}
