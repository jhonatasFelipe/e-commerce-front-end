import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: 'login' , loadChildren:() => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'dashboard' , loadChildren:() => import('./pages/dasshboard/dasshboard.module').then(m => m.DasshboardModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }