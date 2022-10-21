import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Formapago } from '../interfaces/formapago';

@Component({
  selector: 'app-edit-formapagos',
  templateUrl: './edit-formapagos.component.html',
  styleUrls: ['./edit-formapagos.component.css'],
  providers: [MessageService]
})
export class EditFormapagosComponent implements OnInit {

  @Input() formapago:Formapago | undefined;
  @Output() crearItem = new EventEmitter<Formapago>();
  @Output() guardarItem = new EventEmitter<Formapago>();

  form: FormGroup = this.formBuilder.group({
    descripcion: ['', Validators.required],
    credito: [false, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {

  }
  ngOnChanges(cambio: any) {
    this.form.patchValue(cambio.formapago.currentValue);
  }
  guardar() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Forma de Pago',
        detail:
          'Error al crear la forma de pago verifique los campos e intente de nuevo',
      });
      return;
    }
    let formapago=this.form.value;
    formapago.id=this.formapago?.id
    this.guardarItem.emit(formapago);
  }
  crear() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion formapago',
        detail:
          'Error al crear la forma de pago verifique los campos e intente de nuevo',
      });
      return;
    }
    let formapago=this.form.value;
    formapago.id=0
    this.crearItem.emit(formapago);
  }
}
