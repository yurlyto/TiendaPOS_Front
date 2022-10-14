import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { EditProductosComponent } from './edit-productos/edit-productos.component';


@NgModule({
  declarations: [
    ProductosComponent,
    ListadoProductosComponent,
    EditProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule,
    ScrollPanelModule
  ]
})
export class ProductosModule { }
