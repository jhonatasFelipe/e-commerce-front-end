import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { ProdutoComponent } from './produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProdutoComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
