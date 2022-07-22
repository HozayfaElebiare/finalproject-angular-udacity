
import { OrderModule } from '../../models/order/order.module';
import { OrderService } from '../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  orderDetails:OrderModule = {
    FullName: "",
    Total: 0,
    Address: "",
    OrderNumber: 0
  };

  

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.orderDetails = this.orderService.getOrderDetails();
  }

}
