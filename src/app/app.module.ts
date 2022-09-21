import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { VentasModule } from './ventas/ventas.module';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {HttpClientModule} from '@angular/common/http'
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    VentasModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    HttpClientModule,
    ToastModule,
    TableModule,
    BrowserAnimationsModule
  ],
  exports:[
    ButtonModule,
    ToolbarModule,
    ToastModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
