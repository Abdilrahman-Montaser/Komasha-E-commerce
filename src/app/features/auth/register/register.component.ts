import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router) {}

  regForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    rePassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  });

  register(): void {
    if (this.regForm.valid) {
      console.log(this.regForm.value);
      this._AuthService.register(this.regForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if(res.message === 'success') {
            this._AuthService.userIsLogin.next(true);
            this._Router.navigate(['login']);
          }
        }
      })
    }
  }

  matchPass(): boolean {
    if (this.regForm.get('password')?.value === this.regForm.get('rePassword')?.value) {
      return true
    } else {
      return false;
    }
  }
}
