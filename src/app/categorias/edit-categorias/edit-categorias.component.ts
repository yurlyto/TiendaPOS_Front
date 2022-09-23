import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categoria } from '../interfaces/categoria';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.css']
})
export class EditCategoriasComponent implements OnInit {
  @Input() categoria?: Categoria;

  @Output() crearItem = new EventEmitter<Categoria>();
  @Output() guardarItem = new EventEmitter<Categoria>();
  form: FormGroup = this.formBuilder.group({
    descripcion: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }
  ngOnChanges(cambio: any) {
    this.form.patchValue(cambio.categoria.currentValue);
  }
  crear() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Categoria',
        detail:
          'Error al crear la categoria verifique los campos e intente de nuevo',
      });
      return;
    }
    let categoria=this.form.value;
    categoria.id=0
    this.crearItem.emit(categoria);
  }
  guardar() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Categoria',
        detail:
          'Error al crear la categoria verifique los campos e intente de nuevo',
      });
      return;
    }
    let categoria=this.form.value;
    categoria.id=this.categoria?.id
    this.guardarItem.emit(categoria);
  }

}
