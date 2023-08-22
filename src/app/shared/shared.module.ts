import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { HeaderComponent } from './header/header.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { RouterModule } from '@angular/router';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuAdminComponent,
    ImageUploaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSelectModule,
  ],
  exports:[
    /* modules*/
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSelectModule,

    /* components */
    HeaderComponent,
    MenuAdminComponent,
    ImageUploaderComponent,
  ]
})
export class SharedModule { }
