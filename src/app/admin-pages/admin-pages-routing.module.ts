import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPagesComponent } from './admin-pages.component';

const routes: Routes = [
  {
    path:'',
    component: AdminPagesComponent, 
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('./pages/dasshboard/dasshboard.module').then(m => m.DasshboardModule),
        title: "Administrativo - Dashboard"
      },
      {
        path:'marcas',
        loadChildren: () => import('./pages/marca/marca.module').then(m => m.MarcaModule),
        title: "Administrativo - Marcas"
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
