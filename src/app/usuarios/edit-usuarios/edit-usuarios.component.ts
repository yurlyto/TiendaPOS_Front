import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.css']
})
export class EditUsuariosComponent implements OnInit {
  @Input() usuario?: Usuario;

  @Output() crearItem = new EventEmitter<Usuario>();

  @Output() guardarItem = new EventEmitter<Usuario>();
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  form: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    nombres: ['', Validators.required],
    administrador: [false],
    activo: [true],
  });

  ngOnChanges(cambio: any) {
    this.form.patchValue(cambio.usuario.currentValue);
  }

  ngOnInit(): void {}


  guardar() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creación Usuario',
        detail:
          'Error al crear el usuario verifique los campos e intente de nuevo',
      });
      return;
    }
    let usuario=this.form.value;
    usuario.id=this.usuario?.id
    this.guardarItem.emit(usuario);
  }
  crear() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion usuario',
        detail:
          'Error al crear el usuario verifique los campos e intente de nuevo',
      });
      return;
    }
    let usuario=this.form.value;
    usuario.id=0
    this.crearItem.emit(this.form.value);
  }

}

