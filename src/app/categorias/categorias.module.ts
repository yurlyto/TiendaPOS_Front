import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { EditCategoriasComponent } from './edit-categorias/edit-categorias.component';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CategoriasComponent,
    EditCategoriasComponent,
    ListadoCategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class CategoriasModule { }
