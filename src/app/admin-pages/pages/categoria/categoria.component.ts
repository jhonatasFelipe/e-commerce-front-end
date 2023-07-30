import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  id!:string | null;
  constructor(private router: Router, private activeRoute:ActivatedRoute, private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.route.queryParamMap.pipe(
      switchMap((parans:ParamMap) => (
        of(parans)
      )
      )).subscribe({
        next:(params:ParamMap)=>{
          debugger;
          if(params.has('pai')){
            this.id = params.get('pai'); 
          }
        }
      })
  }

  toGoAdd(id?:number | string ){
    if(this.id){
      this.router.navigate([`/admin-pages/categorias/add`],{queryParams:{pai:this.id}});
    }else{
      this.router.navigate(['/admin-pages/categorias/add']);
    }
    
  }
}
