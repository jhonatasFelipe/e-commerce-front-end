import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormBuilder().group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  })
  constructor(private service : AuthService, private router:Router){
  }


  logIn(){
    this.service.logIn(this.loginForm.value).subscribe(
      {
        next : ()=>{
          this.router.navigate(['admin-pages/dashboard']);
        },
        error:(error: HttpErrorResponse) => {
          
        }
      }
    );
  }
}
