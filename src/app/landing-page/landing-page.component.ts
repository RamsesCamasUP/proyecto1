import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
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
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    
  }
  onClickShow(){
    this.info = "Si hay datos";
    this.serviceService.getProduct("products/").subscribe((data: any[])=>{
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
}
