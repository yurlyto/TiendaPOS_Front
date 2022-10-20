import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/categorias/interfaces/categoria';
import { CategoriasService } from 'src/app/categorias/services/categorias.service';
import { environment } from 'src/environments/environment';
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
  @Output() imagenItem = new EventEmitter<FormData>();
  categorias:Categoria[]=[];
  urlImagenes: string=environment.url+"/producto/imagen/";
  constructor(
    private formBuilder: FormBuilder,
    private categoriasService:CategoriasService,
    private messageService: MessageService
  ) {}
  form: FormGroup = this.formBuilder.group({
    descripcion: ['', Validators.required],
    codigoBarras: ['', [Validators.pattern("^[0-9]*$"),Validators.minLength(13),Validators.maxLength(13)]],
    precio: [0, Validators.required],
    cantidad: [0, Validators.required],
    utilidad: ['', Validators.required],
    categoriaId: ['', Validators.required],
    imagen:['', ],
  });

  ngOnChanges(cambio: any) {
    this.form.patchValue(cambio.producto.currentValue);
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.categoriasService.getAll().subscribe((resp) => {
      this.categorias = resp;
    });
  }
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
  actualizarImagen(id:number,event: any){
    console.log(event);
    let fileToUpload = <File>event.files[0];
    let formData:FormData=new FormData();
    formData.append("imagen", fileToUpload);
    formData.append("id", id.toString());
    this.imagenItem.emit(formData);
    event.files=[];
  }

}
