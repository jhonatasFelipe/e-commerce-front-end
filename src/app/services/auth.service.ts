import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

interface LoginInterface{
  email : string,
  senha: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url: string  = `${environment.api.host}:${environment.api.port}${environment.api.path}`
  options = {};
  constructor(private http:HttpClient, private localStorage:LocalStorageService, private router:Router) { }

  logIn(login: LoginInterface):Observable<any> {
   return this.http.post(`${this.url}/auth/login`,login).pipe(
    tap({
      next:(data:any)=>{
        this.localStorage.set('TOKEN', data.token);
      }
    })
   );
  }

  logOut(){
    return this.http.get(`${this.url}/auth/logout`).pipe(
      tap({
        next:()=>{
         this.localStorage.clear();
        }
      })
    );
  }

  isLoged(){
    return this.http.get<boolean | UrlTree >(`${this.url}/auth/profile`);
  }
}
