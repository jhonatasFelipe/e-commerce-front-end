import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { BaseCrudService } from 'src/app/services/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseCrudService<Categoria> {

  override complemento: string  = '/categoria' 
}
