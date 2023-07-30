import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/admin-pages/services/categoria.service';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  idCategoria!:string | null;
  categoria!: Categoria;
  form:FormGroup = new FormBuilder().group(
    {
      nome: new FormControl(null),
      descri: new FormControl(null),
      categoria_pai: new FormControl(null)
    }
  )

  constructor(
    private _categoriaService:CategoriaService,
    private router:Router,
    private activeroute:ActivatedRoute ){
    
    this.idCategoria = this.activeroute.snapshot.paramMap.get('id');
    if(this.idCategoria){
      this.getCategotiaEdit();
    }
  }


  addCategoria(){
    if(this.form.valid){
      if(this.idCategoria){
        this._categoriaService.edit(this.idCategoria, this.form.value).subscribe({
          next:(data: Categoria)=>{
            this.router.navigate([`admin-pages/categorias/list/${data.categora_pai}`]);
          }
        })
      }else{
        this._categoriaService.create(this.form.value).subscribe({
          next:()=>{
            this.router.navigate(['admin-pages/categorias/list']);
          }
        })
      }
    }
  }

  getCategotiaEdit(){
    this._categoriaService.getById(this.idCategoria).subscribe(
      {
        next:(data:Categoria)=>{
          this.form.get('nome')?.setValue(data.nome);
          this.form.get('descri')?.setValue(data.descri);
          this.categoria = data;
        }
      }
    )
  }

  cancel(){
    if(this.categoria.categora_pai){
      this.router.navigate([`admin-pages/categorias/list/${this.categoria.categora_pai}`])
    }else{
      this.router.navigate(['admin-pages/categorias/list']);
    }
  }
}
