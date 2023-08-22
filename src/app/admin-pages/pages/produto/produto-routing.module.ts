import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full"},
  { 
    path:'', component: ProdutoComponent, 
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
export class ProdutoRoutingModule { }
