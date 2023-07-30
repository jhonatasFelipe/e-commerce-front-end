import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BaseCrudService<T> {

  url: string  = `${environment.api.host}:${environment.api.port}${environment.api.path}`
  complemento!:string;
  constructor( private http:HttpClient) {
    
  }

  public getAll(parans?:any){
    return this.http.get<T[]>(`${this.url}${this.complemento}`,{params:parans});
  }

  public create(body:T){
    return this.http.post<T>(`${this.url}${this.complemento}`,body);
  }

  public delete(id:number){
    return this.http.delete(`${this.url}${this.complemento}/${id}`);
  }

  public edit(id:number | string,body:T){
    return this.http.put<T>(`${this.url}${this.complemento}/${id}`, body);
  }

  public getById(id:string | number | null) {
    return this.http.get<T>(`${this.url}${this.complemento}/${id}`);
  }
}
