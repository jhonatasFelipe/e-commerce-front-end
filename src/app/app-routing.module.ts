import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: "", redirectTo: "external-pages/login", pathMatch: "full"},
  { path: 'external-pages', loadChildren: ()=> import('./external-ages/external-ages.module').then(m => m.ExternalAgesModule)},
  { path: 'admin-pages' , loadChildren:() => import('./admin-pages/admin-pages.module').then(m => m.AdminPagesModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }