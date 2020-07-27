import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-step1',
  templateUrl: './login-step1.component.html',
  styleUrls: ['./login-step1.component.css']
})
export class LoginStep1Component implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  email=new FormControl('');
  ngOnInit(): void {
  }
  nextStep(){
    this.loginService.loginData.email=this.email.value;
    this.router.navigateByUrl('/login-step-2').then(() =>{console.log('ok')} );
  }



}
