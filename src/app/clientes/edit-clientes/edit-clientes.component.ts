import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.css'],
  providers:[MessageService]
})
export class EditClientesComponent implements OnInit {
  @Input() cliente:Cliente | undefined;
  @Output() crearItem = new EventEmitter<Cliente>();
  @Output() guardarItem = new EventEmitter<Cliente>();

  form: FormGroup = this.formBuilder.group({
    documento: ['', Validators.required],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    celular: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    cupo: [0, Validators.required],
    saldo: [0, Validators.required],
    observaciones: ['',],
  });

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {

  }
  ngOnChanges(cambio: any) {
    this.form.patchValue(cambio.cliente.currentValue);
  }
  guardar() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Cliente',
        detail:
          'Error al crear la cliente verifique los campos e intente de nuevo',
      });
      return;
    }
    let cliente=this.form.value;
    cliente.id=this.cliente?.id
    this.guardarItem.emit(cliente);
  }
  crear() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Cliente',
        detail:
          'Error al crear la cliente verifique los campos e intente de nuevo',
      });
      return;
    }
    let cliente=this.form.value;
    cliente.id=0
    this.crearItem.emit(cliente);
  }

}
