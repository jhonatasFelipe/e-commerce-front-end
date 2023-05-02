import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MarcaRoutingModule } from './marca-routing.module';
import { MarcaComponent } from './marca.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { FormAddComponent } from './components/form-add/form-add.component';


@NgModule({
  declarations: [
    MarcaComponent,
    ListComponent,
    FormAddComponent
  ],
  imports: [
    CommonModule,
    MarcaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MarcaModule { }
