import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LandingPageComponent } from './landing-page/landing-page.component';
import{LoginComponent} from './login/login.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch : 'full'},
  {path : 'home', component: LandingPageComponent},
  {path: 'login', component: LoginComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
