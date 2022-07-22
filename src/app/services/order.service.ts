import { Injectable } from '@angular/core';
import { OrderModule } from '../models/order/order.module';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderDetails:OrderModule = {
    FullName: "",
    Total: 0,
    Address: "",
    OrderNumber: 0
  };
  constructor() {
  }

  CreateNewOrder(orderDetails:OrderModule){
    this.orderDetails = orderDetails;
    console.log(this.orderDetails);
    // localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));

  }

  getOrderDetails():OrderModule{
    // console.log(localStorage.getItem('OrdersList'));
    // this.orderDetails =JSON.parse(localStorage.getItem('orderDetails')!) as OrderModule;

    return this.orderDetails;
  }


}
