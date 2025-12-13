import { Component, inject, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../authService';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    userName: '',
    password: '',
  };
  router = inject(Router);
  authservice = inject(AuthService);

  onLogin() {
    if (this.loginObj.userName == 'admin' && this.loginObj.password == '1234') {
      this.authservice.login('Token'); // or real JWT from backend
      this.router.navigate(['/dashboard']);
    } else {
      alert('Wrong Username or Password.. Kindly verify again.');
    }
  }
}
