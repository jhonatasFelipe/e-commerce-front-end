import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent {

  constructor(private route:Router){

  }

  toGoAdd(){
    this.route.navigate(['/admin-pages/marcas/add']);
  }
}
