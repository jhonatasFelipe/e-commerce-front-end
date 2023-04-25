import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dasshboard',
  templateUrl: './dasshboard.component.html',
  styleUrls: ['./dasshboard.component.scss']
})
export class DasshboardComponent {

  constructor(private authService:AuthService, private router:Router){

  }
  logout(){
    this.authService.logOut().subscribe(
      {
        next:() => this.router.navigate(['/'])
      }
    );
  }
}


