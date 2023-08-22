import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/admin-pages/services/produto.service';
import Produto from 'src/app/models/Produto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  produtos!:Produto[];
  displayedColumns: string[] = ['nome','actions'];
  constructor(private produtoService:ProdutoService){

  }

  ngOnInit(){
    this.getProdutos();
  }

  getProdutos(){
    this.produtoService.getAll().subscribe(
      {
        next:(produtos:Produto[])=>{
          this.produtos = produtos;
        },
        error:()=>{

        }
      }
    )
  }
}
