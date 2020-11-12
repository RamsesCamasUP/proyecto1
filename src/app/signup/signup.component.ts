import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../Auth/auth-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerFormGroup : FormGroup;

  constructor(private _formBuilder:FormBuilder, private _authService: AuthServiceService, private _router: Router ) { }

  ngOnInit(): void {
    this.registerFormGroup = this._formBuilder.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password1: ['',Validators.required],
      password2: ['',Validators.required],
    })
    
  }
  registration():void{
    const data = this.registerFormGroup.value;
    if((data.password1== data.password2)&& data.email && data.username){
      this._authService.register(data.username,data.email,data.password1,data.password2).subscribe(access=>{
        this._router.navigate(['login'])
      },error=>{
        console.log("El usuario ya existe");
      })
    }else{
      alert("La constraseña no coincide");
    }
  }

}
