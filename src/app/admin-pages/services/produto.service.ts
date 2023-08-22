import { Injectable } from '@angular/core';
import Produto from 'src/app/models/Produto';
import { BaseCrudService } from 'src/app/services/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseCrudService<Produto> {

  override complemento: string  = '/produtos' 
}
