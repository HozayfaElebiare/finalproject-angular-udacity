import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {ProductModule} from './product/product.module';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { MeComponent } from './contact/me/me.component';
import { FormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './cart/place-order/place-order.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartDetailsComponent,
    MeComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductModule,
    FormsModule ,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
