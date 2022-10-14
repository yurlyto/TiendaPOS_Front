import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JustificacionesRoutingModule } from './justificaciones-routing.module';
import { JustificacionesComponent } from './justificaciones.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { EditJustificacionesComponent } from './edit-justificaciones/edit-justificaciones.component';
import { ListadoJustificacionesComponent } from './listado-justificaciones/listado-justificaciones.component';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    JustificacionesComponent,
    EditJustificacionesComponent,
    ListadoJustificacionesComponent
  ],
  imports: [
    CommonModule,
    JustificacionesRoutingModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class JustificacionesModule { }
