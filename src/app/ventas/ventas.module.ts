import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import {DataViewModule} from 'primeng/dataview';
import { DataViewProductosComponent } from './data-view-productos/data-view-productos.component';
import { ButtonModule } from 'primeng/button';

import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CodigoBarrasComponent } from './codigo-barras/codigo-barras.component';
import { IndexComponent } from './index/index.component';
import { ReciboProductosComponent } from './recibo-productos/recibo-productos.component';
import { Toast, ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    IndexComponent,
    DataViewProductosComponent,
    ReciboProductosComponent,
    CodigoBarrasComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    DataViewModule,
    ButtonModule,
    TableModule,
    BadgeModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class VentasModule { }
