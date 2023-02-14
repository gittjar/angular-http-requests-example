import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { OsoiteComponent } from './osoite/osoite.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddressComponent,
    OsoiteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
