import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';
import { MenuAdmin } from './menu';
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent {
  public menu: MenuItem[] = MenuAdmin;
}
