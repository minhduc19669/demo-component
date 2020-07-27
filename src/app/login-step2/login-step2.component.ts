import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
  styleUrls: ['./login-step2.component.scss']
})
export class LoginStep2Component implements OnInit {
  email: string;
  password = new FormControl();
  constructor(private loginSrv: LoginService) {}

  ngOnInit() {
    this.email = this.loginSrv.loginData.email;
  }

  login() {
    // do login
    console.log({
      email: this.email,
      password: this.password.value
    });
  }
}
