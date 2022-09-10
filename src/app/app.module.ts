import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { VentasModule } from './ventas/ventas.module';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';


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
    ToolbarModule
  ],
  exports:[
    ButtonModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
