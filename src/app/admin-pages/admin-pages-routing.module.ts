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
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        title: "Administrativo - Dashboard"
      },
      {
        path:'marcas',
        loadChildren: () => import('./pages/marca/marca.module').then(m => m.MarcaModule),
        title: "Administrativo - Marcas"
      },
      {
        path:'categorias',
        loadChildren: () => import('./pages/categoria/categoria.module').then(m => m.CategoriaModule),
        title: "Administrativo - Categorias"
      },
      {
        path:'produtos',
        loadChildren: () => import('./pages/produto/produto.module').then(m => m.ProdutoModule),
        title: "Administrativo - Categorias"
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
