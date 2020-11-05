import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  formRegistro : FormGroup;
  nombre_com : string;
  edad: string;
  correo: string;
  id: string;
  constructor(private _myservice: ServiceService,private _router: Router,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('idProducto');
    console.log(this.id);
    this._myservice.getSingleProducto(this.id).subscribe((data:JSON)=>{
      let registro = data;
      this.nombre_com = registro['nombre_com']
      this.edad = registro['edad']
      this.correo = registro['correo']

    });
    this.formRegistro = this._formBuilder.group({
      nombre_com: [this.nombre_com],
      edad: [this.edad],
      correo: [this.correo]
    })
    
  }
  updateProducto():void{
    const data = this.formRegistro.value;
    if(data.nombre_com && data.edad && data.correo){
      this._myservice.updateProducto(this.id,data.nombre_com,data.edad,data.correo).subscribe(access=>{
        this._router.navigate(['dashboard'])
      },error=>{
        console.log("Datos inválidos")
      })
    }
  }
}
