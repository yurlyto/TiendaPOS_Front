import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
@NgModule({
  declarations: [
    ClientesComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ToolbarModule,
    ButtonModule,
    TableModule
  ]
})
export class ClientesModule { }
