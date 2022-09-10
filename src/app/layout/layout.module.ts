import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
