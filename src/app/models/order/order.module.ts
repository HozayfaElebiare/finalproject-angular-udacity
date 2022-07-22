import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrderModule { 
  FullName:String = "";
  Total:Number = 0;
  Address:String = "";
  OrderNumber:Number = 0;


  constructor(orderModule:OrderModule){
    this.FullName = orderModule.FullName;
    this.Total = orderModule.Total;
    this.Address = orderModule.Address;
    this.OrderNumber = Math.floor(Math.random() * 1000000);
  }

}
