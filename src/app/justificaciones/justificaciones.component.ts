import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Justificacion } from './interfaces/justificacion';
import { JustificacionesService } from './services/justificaciones.service';

@Component({
  selector: 'app-justificaciones',
  templateUrl: './justificaciones.component.html',
  styleUrls: ['./justificaciones.component.css'],
  providers: [MessageService]
})
export class JustificacionesComponent implements OnInit {
  justificacion:Justificacion={id:0,descripcion:"", factor:1}
  justificaciones: Justificacion[]=[];
  constructor(
    private justificacionesService:JustificacionesService,
    private messageService:MessageService
  ) { }


  ngOnInit(): void {
    this.refrescar();
  }
  new(){
    this.justificacion={id:0,descripcion:"", factor:1}
  }
  edit(justificacion:Justificacion){
    this.justificacion=justificacion;
    console.log(justificacion)
  }
  crear(justificacion:Justificacion){
    this.justificacionesService.crear(justificacion).subscribe((resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creacion Justificación',
          detail:
            `Se ha creado la justificación ${justificacion.descripcion} exitosamente!!!`,
        });
        this.refrescar();
        this.new();
    });
  }
  guardar(justificacion:Justificacion){
    this.justificacionesService.guardar(justificacion).subscribe((resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Edición Justificación',
          detail:
            `Se ha guardado la justificación ${justificacion.descripcion} exitosamente!!!`,
        });
        this.refrescar();
    });
  }
  eliminar(justificacion:Justificacion){
    this.justificacionesService.eliminar(justificacion).subscribe((resp) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Eliminación Justificación',
        detail:
          `Se ha eliminado la justificación ${justificacion.descripcion} exitosamente!!!`,
      });
      this.refrescar();
      this.new();
  });
  }
  refrescar(){
    this.justificacionesService.getAll().subscribe((resp) => {
      this.justificaciones = resp;
    });
  }

}
