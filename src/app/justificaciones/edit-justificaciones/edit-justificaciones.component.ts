import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Justificacion } from '../interfaces/justificacion';

@Component({
  selector: 'app-edit-justificaciones',
  templateUrl: './edit-justificaciones.component.html',
  styleUrls: ['./edit-justificaciones.component.css'],
  providers: [MessageService],
})
export class EditJustificacionesComponent implements OnInit {
  @Input() justificacion?: Justificacion;

  @Output() crearItem = new EventEmitter<Justificacion>();
  @Output() guardarItem = new EventEmitter<Justificacion>();

  form: FormGroup = this.formBuilder.group({
    descripcion: ['', Validators.required],
    factor: [1, Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}
  ngOnChanges(cambio: any) {
    this.form.patchValue(cambio.justificacion.currentValue);
  }
  ngOnInit(): void {}
  guardar() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Justificación',
        detail:
          'Error al crear la justificación verifique los campos e intente de nuevo',
      });
      return;
    }
    let justificacion=this.form.value;
    justificacion.id=this.justificacion?.id
    this.guardarItem.emit(justificacion);
  }
  crear() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Justificación',
        detail:
          'Error al crear la justificación verifique los campos e intente de nuevo',
      });
      return;
    }
    let justificacion=this.form.value;
    justificacion.id=0
    this.crearItem.emit(this.form.value);
  }
}
