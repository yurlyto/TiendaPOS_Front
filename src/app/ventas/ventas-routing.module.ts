import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: IndexComponent }
	])],
	exports: [RouterModule]
})
export class VentasRoutingModule { }
