import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formRegistro : FormGroup;
  constructor(private _myservice: ServiceService,private _router: Router,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formRegistro = this._formBuilder.group({
      nombre_com: ['',Validators.required],
      edad: ['',Validators.required],
      correo: ['',Validators.required]
    })
  }
  addProducto():void{
    const data = this.formRegistro.value;
    if(data.nombre_com && data.edad && data.correo){
      this._myservice.addProducto(data.nombre_com,data.edad,data.correo).subscribe(access=>{
        this._router.navigate(['dashboard'])
      },error=>{
        console.log("Datos inválidos")
      })
    }
  }
}
