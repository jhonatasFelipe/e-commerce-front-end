import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MarcaService } from 'src/app/admin-pages/services/marca.service';
import { ProdutoService } from 'src/app/admin-pages/services/produto.service';
import { Marca } from 'src/app/models/Marca';
import ProductImageFile from 'src/app/models/ProductImageFile';
import Produto from 'src/app/models/Produto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  marcas!:Marca[];
  constructor(
    private fb:FormBuilder,
    private marcaService:MarcaService,
    private productService:ProdutoService){

  }
  ngOnInit(): void {
    this.getMarcas();
  }


  form = this.fb.group({
    nome: ['',[Validators.required]],
    descri:['',[Validators.required]],
    preco:[0.00,[Validators.required]],
    valor: [0.00,[Validators.required]],
    marca:[0, [Validators.required]],
    qtd:[0,[]],
    ativo: [false,[]], 
    codigo_de_barras:['',[Validators.required]],
    imagens: this.fb.array<ProductImageFile>([]),
    caracteristicas: [[]],

  });

 

  get imagens() {
    return this.form.get('imagens') as FormArray;
  }
  
  addImagemField(){
    this.imagens.push(this.fb.control('', Validators.required));
  }

  removeImageField(id:number){
    this.imagens.removeAt(id);
  }

  getMarcas(){
    this.marcaService.getAll().subscribe({
      next:(marcas:Marca[])=>{
        console.log(marcas);
        this.marcas = marcas;
      },
      error:()=>{

      }
    })
  }

  saveProduct(){

    this.productService.create(this.form.value).subscribe({
      next:(data:Produto)=>{
        alert('criado');
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
