import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private service : AuthService){

  }


  logIn(){
    this.service.logIn(this.loginForm.value).subscribe(
      {
        next : (data)=>{
          console.log(data.token);
        },
        error:(error: HttpErrorResponse) => {
          console.log(error);
          console.log(error.status);
          console.log(error.error.message);
        }
      }
    );
  }
}
