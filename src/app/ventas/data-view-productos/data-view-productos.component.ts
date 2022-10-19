import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/productos/interfaces/producto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-view-productos',
  templateUrl: './data-view-productos.component.html',
  styleUrls: ['./data-view-productos.component.scss']
})
export class DataViewProductosComponent implements OnInit {
  urlImagenes:string=environment.url+"/producto/imagen/";
  @Input() productos: Producto[]=[];
  @Output() addItem = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  agregar(producto:Producto){
    if( producto.cantidad){
      this.addItem.emit(producto);
    }

    console.log(producto);
  }

}
