import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  @Input() clientes:Cliente[]=[];
  @Output() editItem = new EventEmitter<Cliente>();
  @Output() eliminarItem = new EventEmitter<Cliente>();
  constructor() { }

  ngOnInit(): void {
  }
  edit(cliente: Cliente) {
    this.editItem.emit(cliente);
    console.log(cliente);
  }
  eliminar(cliente:Cliente){
    this.eliminarItem.emit(cliente);
    console.log(cliente);
  }

}
