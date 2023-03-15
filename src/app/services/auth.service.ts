import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private http:HttpClient) { 
    
  }

  logIn(login: LoginInterface):Observable<any> {
   return this.http.post(`${this.url}/auth/login`,login, this.options);
  }

  logOut(){

  }

  isLoged(){

  }

  innitOptions(){
    let headers = new HttpHeaders();
    headers.append('Accept','application/json');
    headers.append('Content-Type', 'application/json');

    this.options = {headers: headers}
  }
}
