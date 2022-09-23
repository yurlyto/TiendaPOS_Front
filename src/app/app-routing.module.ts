import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/ventas', pathMatch: 'full' },
            { path: 'ventas', component: LayoutComponent, loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule)  },
            { path: 'justificaciones',component: LayoutComponent, loadChildren: () => import('./justificaciones/justificaciones.module').then(m => m.JustificacionesModule) },
            { path: 'categorias',component: LayoutComponent, loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule) },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
