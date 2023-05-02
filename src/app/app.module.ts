import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './external-ages/pages/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from "./interceptors";
import { AngularWebStorageModule } from 'angular-web-storage';
import { DasshboardComponent } from './admin-pages/pages/dasshboard/dasshboard.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { ExternalAgesComponent } from './external-ages/external-ages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DasshboardComponent,
    AdminPagesComponent,
    ExternalAgesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    AngularWebStorageModule
    
  ],
  providers: [ httpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
