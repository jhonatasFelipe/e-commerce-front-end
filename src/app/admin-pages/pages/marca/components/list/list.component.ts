import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/admin-pages/services/marca.service';
import { Marca } from 'src/app/models/Marca';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  marcas: Marca[] = [];
  displayedColumns: string[] = ['nome','actions'];
  constructor(private _marcaService: MarcaService){

  }
  ngOnInit(): void {
   this.getMarcas();
  }

  deleteMarca(id:number){
   this._marcaService.delete(id).subscribe(
    {
      next: ()=>{
        this.getMarcas();
      }
    }
   )
  }

  getMarcas(){
    this._marcaService.getAll().subscribe(
      {
        next: (marcas: Marca[])=>{
          this.marcas = marcas;
        }
      }
     );
  }


}
