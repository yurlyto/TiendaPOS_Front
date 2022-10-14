import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css'],
  providers: [MessageService]
})
export class EditProductosComponent implements OnInit {
  @Input() producto?: Producto;

  @Output() crearItem = new EventEmitter<Producto>();

  @Output() guardarItem = new EventEmitter<Producto>();
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}
  form: FormGroup = this.formBuilder.group({
    descripcion: ['', Validators.required],
    codigoBarras: ['', Validators.required],
    precio: [0, Validators.required],
    cantidad: [0, Validators.required],
    utilidad: ['', Validators.required],
    categoriaId: ['', Validators.required],
    imagen:['', ],
  });

  ngOnChanges(cambio: any) {
    this.form.patchValue(cambio.producto.currentValue);
  }

  ngOnInit(): void {}


  guardar() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Producto',
        detail:
          'Error al crear el producto verifique los campos e intente de nuevo',
      });
      return;
    }
    let producto=this.form.value;
    producto.id=this.producto?.id
    this.guardarItem.emit(producto);
  }
  crear() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Creacion Producto',
        detail:
          'Error al crear el producto verifique los campos e intente de nuevo',
      });
      return;
    }
    let producto=this.form.value;
    producto.id=0
    this.crearItem.emit(this.form.value);
  }

}
