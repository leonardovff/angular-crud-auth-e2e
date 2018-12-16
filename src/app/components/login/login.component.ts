import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isPasswordHide:boolean = true;
  isLoading: boolean = false;

  form:FormGroup = new FormGroup({
    'email': new FormControl('leonardovff@gmail.com', [
      Validators.required, 
      Validators.maxLength(191),
      Validators.email
    ]),
    'password': new FormControl('123456', [
      Validators.required
    ])
  })

  constructor(
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private router: Router
  ) {
    
  }
  feedbackLogin(msg: string){
    this.snackBar.open(msg, '', {
      duration: 3500
    });
    this.isLoading = false;
  }
  login(){
    this.isLoading = true;
    this.auth.login(this.form.value).then(res => {
      this.feedbackLogin('Login realizado com sucesso');
      this.router.navigate(['/']);
    }).catch(err => {
      this.feedbackLogin('Login e/ou senha incorreta');
    });
  }

}