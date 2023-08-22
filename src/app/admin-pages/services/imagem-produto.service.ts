import { Injectable } from '@angular/core';
import { FileServiceService } from 'src/app/services/file-service.service';

@Injectable({
  providedIn: 'root'
})
export class ImagemProdutoService extends FileServiceService {

  override complemento: string  = '/product-image' 
}
