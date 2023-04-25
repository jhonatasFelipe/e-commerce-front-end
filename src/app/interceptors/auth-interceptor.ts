import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { LocalStorageService } from 'angular-web-storage';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage:LocalStorageService){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const newReq = req.clone({
        headers: req.headers
        .set('Authorization',`Bearer ${this.storage.get('TOKEN')}`)
        .set('Accept','application/json')
        .set('Content-Type', 'application/json')
      });
    return next.handle(newReq);
  }
}