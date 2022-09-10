import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JustificacionesRoutingModule } from './justificaciones-routing.module';
import { JustificacionesComponent } from './justificaciones.component';
import { EditJustificacionesComponentComponent } from './edit-justificaciones-component/edit-justificaciones-component.component';
import { ListadoJustificacionesComponentComponent } from './listado-justificaciones-component/listado-justificaciones-component.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    JustificacionesComponent,
    EditJustificacionesComponentComponent,
    ListadoJustificacionesComponentComponent,
  ],
  imports: [
    CommonModule,
    JustificacionesRoutingModule,
    ToolbarModule,
    ButtonModule
  ]
})
export class JustificacionesModule { }
