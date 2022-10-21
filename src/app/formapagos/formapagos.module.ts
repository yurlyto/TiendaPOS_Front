import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormapagosRoutingModule } from './formapagos-routing.module';
import { FormapagosComponent } from './formapagos.component';
import { EditFormapagosComponent } from './edit-formapagos/edit-formapagos.component';
import { ListadoFormapagosComponent } from './listado-formapagos/listado-formapagos.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    FormapagosComponent,
    EditFormapagosComponent,
    ListadoFormapagosComponent
  ],
  imports: [
    CommonModule,
    FormapagosRoutingModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    ToastModule
  ]
})
export class FormapagosModule { }
