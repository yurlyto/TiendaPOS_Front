import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';




@NgModule({
  declarations: [
    UsuariosComponent,
    ListadoUsuariosComponent,
    EditUsuariosComponent,


  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    TableModule
  ]
})
export class UsuariosModule { }
