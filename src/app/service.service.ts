import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {AuthServiceService} from './Auth/auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //private REST_API_SERVER = "http://localhost:8000/";
  private REST_API_SERVER = "https://trayectoriaback1.herokuapp.com/";
  constructor(private httpclient : HttpClient, private _authService :AuthServiceService) { }

  public getProduct(){
    let user = this._authService.getUser()
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpclient.get(`${this.REST_API_SERVER}api/v1/dashboard/`,httpOptions);
  }
  addProducto(nombre_com: string, edad: string,correo: string):Observable<any>{
    let user = this._authService.getUser()
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpclient.post(`${this.REST_API_SERVER}api/v1/dashboard/`,{nombre_com,edad,correo},httpOptions);
  }
  deleteProduct(id: string):Observable<any>{
    let user = this._authService.getUser()
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpclient.delete(`${this.REST_API_SERVER}api/v1/dashboard/${id}`,httpOptions);
  }
  updateProducto(id: string, nombre_com: string, edad:string,correo:string):Observable<any>{
    let user = this._authService.getUser()
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpclient.put(`${this.REST_API_SERVER}api/v1/dashboard/${id}`,{nombre_com,edad,correo},httpOptions);
  }
  getSingleProducto(id: string){
    let user = this._authService.getUser()
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpclient.get(`${this.REST_API_SERVER}api/v1/dashboard/${id}`,httpOptions);
  }
}