import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product/product.module';
import { ProductService } from '../../services/product.service';
import { OrderModule } from '../../models/order/order.module';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems:ProductModel[] = [];
  total:number = 0;
  fullname:string = "";
  address:string = "";
  creditCardNumber:string = "";
  orderDetails:OrderModule = {
    FullName: "",
    Total: 0,
    Address: "",
    OrderNumber: 0
  };



  constructor(private productService: ProductService,private _router: Router, private orderService:OrderService) { }

  ngOnInit(): void {
  this.cartItems = this.productService.getCartItems();
  this.totalAmount();

  }

  removeFromCart(id?:any){
    this.productService.removeFromCart(id);
  this.cartItems = this.productService.getCartItems();
  this.totalAmount();

  }

  totalAmount():Number{
    this.total=0;
  this.cartItems.forEach(item => {
    this.total += Number(item.price) * Number(item.AmountOnCart);
  }
  );
  return this.total;
}

checkout(){
  if(this.fullname && this.address && this.creditCardNumber){
    alert("Thank you for your order!");
    this._router.navigateByUrl('/orderplaced')
    this.orderDetails = {
      FullName: this.fullname,
      Total: this.total,
      Address: this.address,
      OrderNumber: Math.floor(Math.random() * 1000000)
    };
    this.orderService.CreateNewOrder(this.orderDetails);
  }
  else{
    alert("Please fill out all the fields!");
  }
}


}

