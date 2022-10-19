import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Producto } from 'src/app/productos/interfaces/producto';

@Component({
  selector: 'app-codigo-barras',
  templateUrl: './codigo-barras.component.html',
  styleUrls: ['./codigo-barras.component.css'],
  providers:[MessageService]
})
export class CodigoBarrasComponent implements OnInit {
  @Input() productos:Producto[]=[];
  @Output() addItem = new EventEmitter<Producto>();
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}
  form: FormGroup = this.formBuilder.group({
    codBar: [, [Validators.pattern("^[0-9]*$"),Validators.minLength(13),Validators.maxLength(13)]],
  });
  ngOnInit(): void {
  }
  buscar(){
    if(!this.form.valid){
      this.messageService.add({severity:'warn', summary:'Buscar Producto', detail:'Codigo de barras incorrecto!!'});
      return
    }
    let codBar=this.form.controls['codBar'].value;
    let producto:Producto = this.productos.filter(item => item.codigoBarras === codBar)[0];
    if (!producto){
      this.messageService.add({severity:'warn', summary:'Buscar Producto', detail:'Producto no existe!!'});
    }else{
      this.form.controls['codBar'].setValue("");
      this.addItem.emit(producto);
    }


  }

}
