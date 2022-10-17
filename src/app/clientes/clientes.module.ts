import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { EditClientesComponent } from './edit-clientes/edit-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    ClientesComponent,
    ListadoClientesComponent,
    EditClientesComponent,

  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule,
    ScrollPanelModule
  ]
})
export class ClientesModule { }
