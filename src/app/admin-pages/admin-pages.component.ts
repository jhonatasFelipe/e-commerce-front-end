import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.scss']
})
export class AdminPagesComponent {

  menuOpened:boolean = false;

  toggleMenuIcon(){
    this.menuOpened = this.menuOpened ? false : true;
  }

}
