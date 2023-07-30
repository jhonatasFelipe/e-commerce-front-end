import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    CategoriaComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CategoriaModule { }
