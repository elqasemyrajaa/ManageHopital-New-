import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './page-section/navbar/navbar.component';
import { NavbarSmallComponent } from './page-section/navbar-small/navbar-small.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointementComponent } from './appointements/appointement/appointement.component';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { appointementReducer } from './appointements/store/appointement.reducer';
import { AppointementEffect } from './appointements/store/appointement.effect';
import { LoginComponent } from './login/login/login.component';
import { SidebarComponent } from './page-section/sidebar/sidebar.component';
import { HopitalComponent } from './hopitals/hopital/hopital.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSmallComponent,
    AppointementComponent,
    LoginComponent,
    SidebarComponent,
    HopitalComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("appointements", appointementReducer),
    StoreModule.forRoot({}),
    EffectsModule.forFeature([AppointementEffect]),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
