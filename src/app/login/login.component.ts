import { Component, OnInit } from '@angular/core';
import{AuthService} from './../services/auth.service';

import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../Auth/auth-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup : FormGroup;
  constructor(private authSev : AuthService, private _formBuilder:FormBuilder, private _authService: AuthServiceService, private _router: Router ) { }

  ngOnInit(): void {
    if(this._authService.isAuthenticated()){
      this._router.navigate(['dashboard'])
    }
    this.loginFormGroup = this._formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  async onGoogleLogin(){

    this.authSev.loginGoogle().then((res)=>{
      this._router.navigate(['/home'])
    }).catch((err)=>{console.log(err)})

  }
  login():void{
    const data = this.loginFormGroup.value;
    if(data.email && data.password){
      this._authService.login(data.email,data.password).subscribe(access=>{
        localStorage.setItem('user',JSON.stringify(access));
        this._router.navigate(['dashboard'])
      },error=>{
        console.log("Datos inválidos");
      });
      console.log(localStorage.getItem('user'))
    }
}
	
  
}
