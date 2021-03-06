import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AppointementComponent } from './appointements/appointement/appointement.component';
import { SidebarComponent } from './page-section/sidebar/sidebar.component';
import { HopitalComponent } from './hopitals/hopital/hopital.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './page-section/navbar/navbar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'appointement', component: AppointementComponent },
  { path: 'hospitals', component: HopitalComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: NavbarComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
