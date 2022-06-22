import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './screens/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DefaultLayoutComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
