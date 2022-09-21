import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Justificacion } from '../interfaces/justificacion';
import { JustificacionesService } from '../services/justificaciones.service';

@Component({
  selector: 'app-listado-justificaciones',
  templateUrl: './listado-justificaciones.component.html',
  styleUrls: ['./listado-justificaciones.component.css'],
  providers: [MessageService]
})
export class ListadoJustificacionesComponent implements OnInit {
  @Output() editItem = new EventEmitter<Justificacion>();
  @Output() deleteItem = new EventEmitter<Justificacion>();
  @Input() justificaciones: Justificacion[]=[];
  constructor(

    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {}
  edit(justificacion: Justificacion) {
    this.editItem.emit(justificacion);
    console.log(justificacion);
  }
  delete(justificacion: Justificacion) {
    this.deleteItem.emit(justificacion);
    console.log(justificacion);
  }
}
