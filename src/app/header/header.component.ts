import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../Auth/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthServiceService, private _router: Router) { }

  ngOnInit(): void {
  }
  logout():void{
    this._authService.signOut().subscribe(access=>{
      console.log("Saliendo")
      localStorage.removeItem('user');
      console.log(this._authService.isAuthenticated())
      this._router.navigate(['login'])
    },error=>{
      console.log("error")
    })
  }
}
