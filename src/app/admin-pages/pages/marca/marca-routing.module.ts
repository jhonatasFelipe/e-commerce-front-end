import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from './marca.component';
import { FormAddComponent } from './components/form-add/form-add.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full"},
  { 
    path:'', component: MarcaComponent, 
    children:[
      {path: 'list', component: ListComponent},
      {path: 'add', component: FormAddComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcaRoutingModule { }
