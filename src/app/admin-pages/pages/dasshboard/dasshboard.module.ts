import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasshboardRoutingModule } from './dasshboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DasshboardRoutingModule,
    SharedModule
  ]
})
export class DasshboardModule { }
