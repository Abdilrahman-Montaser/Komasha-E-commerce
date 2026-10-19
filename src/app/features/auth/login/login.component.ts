import { AuthService } from '../../../core/services/auth.service';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router) {}

  logForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
  });

  login(): void {
    if (this.logForm.valid) {
      console.log(this.logForm.value);
      this._AuthService.login(this.logForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if(res.message === 'success') {
            localStorage.setItem('userToken', res.token);
            this._AuthService.userIsLogin.next(true);
            this._Router.navigate(['home']);
          }
        }
      })
    }
  }
}
