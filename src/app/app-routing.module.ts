import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LandingPageComponent } from './landing-page/landing-page.component';
import{LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch : 'full'},
  {path : 'dashboard', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'signup',component: SignupComponent }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
