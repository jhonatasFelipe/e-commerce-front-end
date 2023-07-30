import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full"},
  { 
    path:'', component: CategoriaComponent, 
    children:[
      {path: 'list', component: ListComponent},
      {path: 'list/:id', component: ListComponent},
      {path: 'add', component: FormComponent},
      {path: 'edit/:id', component: FormComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
