import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  status :Boolean = false;
  products = [];
  info :String = 'No hay datos';
  nameButton :String = 'Mostrar';
  constructor(private serviceService: ServiceService, private _router: Router) { }

  ngOnInit(): void {
    
  }
  onClickShow(){
    this.info = "Si hay datos";
    this.serviceService.getProduct().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })
  }
  onClickClear(){
    this.products = [];
    this.info = "No hay datos";
  }
  showHide(){
    if (this.status) {
      this.nameButton = 'Mostrar';
    }else{
      this.nameButton = 'Ocultar';
    }
    this.status = !this.status;
  }

  addProduct():void{
    this._router.navigate(['addProduct'])
  }
  deleteProduct(id:string):void{
    this.serviceService.deleteProduct(id).subscribe(access=>{
      console.log("Todo bien")
      window.location.reload();
    },error=>{
      console.log("Datos inválidos")
    })
    
  }
  updateProduct(id:string):void{
    localStorage.setItem('idProducto',id);
    this._router.navigate(['updateProduct'])
  }
}
