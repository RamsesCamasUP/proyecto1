import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private REST_API_SERVER = "http://localhost:3000/";
  constructor(private httpclient : HttpClient) { }

  public getProduct(nameEndpoint: String){
    return this.httpclient.get(this.REST_API_SERVER + nameEndpoint);
  }
}