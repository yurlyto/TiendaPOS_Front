import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { Categoria } from 'src/app/categorias/interfaces/categoria';
import { CategoriasService } from 'src/app/categorias/services/categorias.service';
import { Producto } from 'src/app/productos/interfaces/producto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-view-productos',
  templateUrl: './data-view-productos.component.html',
  styleUrls: ['./data-view-productos.component.scss'],
})
export class DataViewProductosComponent implements OnInit {
  urlImagenes: string = environment.url + '/producto/imagen/';
  @Input() productos: Producto[] = [];
  @Output() addItem = new EventEmitter<Producto>();
  @ViewChild('dv') dataview: DataView | undefined;
  categorias:Categoria[]=[];

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.refrescar();
  }
  refrescar(){
    this.categoriasService.getAll().subscribe((resp) => {
      this.categorias = resp;
    });
  }
  agregar(producto: Producto) {
    if (producto.cantidad) {
      this.addItem.emit(producto);
    }
  }
  filtrar(event: any){
    if(this.dataview){
      this.dataview.filter(event.value, 'equals')
    }
  }
}
