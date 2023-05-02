import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalAgesComponent } from './external-ages.component';

const routes: Routes = [
  { 
    path:'' , 
    component: ExternalAgesComponent,
    children:[
      {path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalAgesRoutingModule { }
