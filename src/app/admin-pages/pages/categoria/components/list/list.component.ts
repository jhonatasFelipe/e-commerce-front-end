import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { CategoriaService } from 'src/app/admin-pages/services/categoria.service';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  categorias: Categoria[] = [];
  subCategoria!: Categoria;
  displayedColumns: string[] = ['nome', 'descri', 'actions'];

  constructor( private categoriaService:CategoriaService,
     private route:ActivatedRoute,
     private router:Router){

  }


  deleteCaractegoria(id:number){}

  
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((parans:ParamMap) => (
        of(parans)
      )
      )).subscribe({
        next:(params:ParamMap)=>{
          if(params.has('id')){
            this.getCategoria(params.get('id')); 
          }else{
            this.getCategoriasPai(true);
          }
        }
      })
    
  }

  getCategoriasPai(onlyFather: boolean){
    this.categoriaService.getAll({only_father: onlyFather}).subscribe({
      next:(categorias:Categoria[])=>{
        this.categorias = categorias;
      }
    })
  }

  getCategoria(id:string | null){
    this.categoriaService.getById(id).subscribe(
      {
        next:(data:Categoria)=>{
         this.subCategoria = data;
         this.categorias = this.subCategoria?.sub_categorias;
        }
      }
    )
  }

  editCaractegoria(id:string){
    this.router.navigate([`/admin-pages/categorias/edit/${id}`]);
  }

  goToSubcategorias(id:string){
      this.router.navigate([`/admin-pages/categorias/list/${id}`], {queryParams:{pai:id}});
    
  }


}
