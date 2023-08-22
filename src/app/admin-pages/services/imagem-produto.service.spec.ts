import { TestBed } from '@angular/core/testing';

import { ImagemProdutoService } from './imagem-produto.service';

describe('ImagemProdutoService', () => {
  let service: ImagemProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagemProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
