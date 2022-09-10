import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: LayoutComponent,
                children: [
                  { path: '', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) },
                  { path: 'ventas', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) },
                ],
            },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
