import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MarcaService } from 'src/app/admin-pages/services/marca.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss']
})
export class FormAddComponent {

  form:FormGroup = new FormBuilder().group(
    {
      nome: new FormControl(null)
    }
  )
  constructor(private _marcaService:MarcaService, private _router:Router){

  }

  addMarca(){
    if(this.form.valid){
      this._marcaService.create(this.form.value).subscribe(
        {
          next: (data)=>{
            this._router.navigate(["admin-pages/marcas/list"]);
          },
          error:()=>{

          }
        }
      );
    }
  }

  cancel(){
    this._router.navigate(["admin-pages/marcas/list"]);
  }
}
