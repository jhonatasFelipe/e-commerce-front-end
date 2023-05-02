
import { Injectable } from '@angular/core';
import { Marca } from 'src/app/models/Marca';
import { BaseCrudService } from 'src/app/services/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends BaseCrudService<Marca> {
 
  override complemento: string  = '/marcas' 
}
