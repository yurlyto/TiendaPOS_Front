import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Categoria } from './interfaces/categoria';

import { CategoriasService } from './services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: [MessageService]
})
export class CategoriasComponent implements OnInit {
  categoria:Categoria={id:0,descripcion:""}
  categorias: Categoria[]=[];

  constructor(
    private categoriasService:CategoriasService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.refrescar();
  }
  refrescar(){
    this.categoriasService.getAll().subscribe((resp) => {
      this.categorias = resp;
    });
  }
  new(){
    this.categoria={id:0,descripcion:""}
  }
  edit(categoria:Categoria){
    this.categoria=categoria;
    console.log(categoria)
  }
  crear(categoria:Categoria){
    this.categoriasService.crear(categoria).subscribe((resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creacion Categoria',
          detail:
            `Se ha creado la categoria ${categoria.descripcion} exitosamente!!!`,
        });
        this.refrescar();
        this.new();
    });
  }
  guardar(categoria:Categoria){
    this.categoriasService.guardar(categoria).subscribe((resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Edición Categoria',
          detail:
            `Se ha guardado la categoria ${categoria.descripcion} exitosamente!!!`,
        });
        this.refrescar();
    });
  }
  eliminar(categoria:Categoria){
    this.categoriasService.eliminar(categoria).subscribe((resp) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Eliminación Categoria',
        detail:
          `Se ha eliminado la categoria ${categoria.descripcion} exitosamente!!!`,
      });
      this.refrescar();
      this.new();
    });
  }


}
