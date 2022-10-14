import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { VentasRoutingModule } from './ventas-routing.module';
import {DataViewModule} from 'primeng/dataview';
import { DataViewProductosComponent } from './pages/data-view-productos/data-view-productos.component';
import { ButtonModule } from 'primeng/button';
import { ReciboProductosComponent } from './pages/recibo-productos/recibo-productos.component';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';


@NgModule({
  declarations: [
    IndexComponent,
    DataViewProductosComponent,
    ReciboProductosComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    DataViewModule,
    ButtonModule,
    TableModule,
    BadgeModule
  ]
})
export class VentasModule { }
