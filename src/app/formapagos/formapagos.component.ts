import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Formapago } from './interfaces/formapago';
import { FormapagosService } from './services/formapagos.service';

@Component({
  selector: 'app-formapagos',
  templateUrl: './formapagos.component.html',
  styleUrls: ['./formapagos.component.css'],
  providers: [MessageService],
})
export class FormapagosComponent implements OnInit {
  formapagos: Formapago[] = [];
  formapago: Formapago = {
    id: 0,
    descripcion: '',
    credito: false,
  };

  constructor(
    private formapagosService: FormapagosService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.refrescar();
  }
  nuevo() {
    this.formapago = {
      id: 0,
      descripcion: '',
      credito: false,
    };
  }
  refrescar() {
    this.formapagosService.getAll().subscribe((resp) => {
      this.formapagos = resp;
    });
  }
  editar(formapago: Formapago) {
    console.log(formapago);
    this.formapago = formapago;
  }
  eliminar(formapago: Formapago) {
    this.formapagosService.eliminar(formapago).subscribe((resp) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Eliminación Formapago',
        detail: `Se ha eliminado la forma de pago ${formapago.descripcion} exitosamente!!!`,
      });
      this.refrescar();
      this.nuevo();
    });
  }
  crear(formapago: Formapago) {
    this.formapagosService.crear(formapago).subscribe((resp) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Creacion Formapago',
        detail: `Se ha creado la forma de pago ${formapago.descripcion} exitosamente!!!`,
      });
      this.refrescar();
      this.nuevo();
    });
  }
  guardar(formapago: Formapago) {
    this.formapagosService.guardar(formapago).subscribe((resp) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Edición Forma de pago',
        detail: `Se ha guardado la forma de pago ${formapago.descripcion} exitosamente!!!`,
      });
      this.refrescar();
    });
  }
}
