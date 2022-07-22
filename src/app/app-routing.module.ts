import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { PlaceOrderComponent } from './cart/place-order/place-order.component';
import { MeComponent } from './contact/me/me.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path: '',component: ProductListComponent },
  { path: 'productdetails/:id',component: ProductDetailComponent },
  { path: 'cart',component: CartDetailsComponent },
  { path: 'contact',component: MeComponent },
  { path: 'orderplaced',component: PlaceOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
