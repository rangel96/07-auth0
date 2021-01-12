import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PriceComponent } from './components/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtectedComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule.forRoot({
      domain: 'ericran90.us.auth0.com',
      clientId: 'hXJY2i2Ptkr5pIw1ShJKLCtJSbz1kM6t'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
