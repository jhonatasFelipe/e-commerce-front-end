import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {

  constructor(private route:Router){

  }

  toGoAdd(){
    this.route.navigate(['/admin-pages/produtos/add']);
  }

}
