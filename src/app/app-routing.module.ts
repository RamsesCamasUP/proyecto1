import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LandingPageComponent } from './landing-page/landing-page.component';
import{LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignupComponent} from './signup/signup.component';
import {AddProductComponent} from './add-product/add-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch : 'full'},
  {path : 'dashboard', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'signup',component: SignupComponent },
  {path: 'addProduct',component:AddProductComponent},
  {path: 'updateProduct',component:UpdateProductComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
