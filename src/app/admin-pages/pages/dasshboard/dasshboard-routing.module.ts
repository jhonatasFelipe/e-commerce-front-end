import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasshboardComponent } from './dasshboard.component';

const routes: Routes = [
  {path: '' , component : DasshboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasshboardRoutingModule { }
