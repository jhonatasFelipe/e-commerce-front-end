import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

const headers = new HttpHeaders({
  'Content-disposition': "multipart/form-data"
});

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  url: string  = `${environment.api.host}:${environment.api.port}${environment.api.path}`;
  complemento!:string;
  
  constructor(private http:HttpClient) {}

  public upload(body:FormData){
    console.log(this.complemento);
    return this.http.request('POST',`${this.url}${this.complemento}`,{
      body: body,
      headers: headers,
      observe:'events',
      reportProgress: true
      });
  }

  public delete(nome:string){
    return this.http.delete(`${this.url}${this.complemento}`,{body:{nome:nome}});
  }
}
