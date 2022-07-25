import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModel { 
  id:Number;
  name:String;
  price:Number;
  description:String;
  url:String;
  onCart:boolean = false;
  public AmountOnCart:Number = 0;




  constructor(ProductModel:ProductModel){
    this.id = ProductModel.id;
    this.name = ProductModel.name;
    this.price = ProductModel.price;
    this.description = ProductModel.description;
    this.url = ProductModel.url;
    this.onCart = ProductModel.onCart;
    this.AmountOnCart = ProductModel.AmountOnCart;
  }

  
}
