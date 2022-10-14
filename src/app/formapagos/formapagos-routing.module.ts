import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormapagosComponent } from './formapagos.component';

const routes: Routes = [{ path: '', component: FormapagosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormapagosRoutingModule { }
