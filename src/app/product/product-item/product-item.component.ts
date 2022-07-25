import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?:ProductModel;
  @Output() addItemToCartEvent = new EventEmitter<ProductModel>();
  @Output() removeFromCartEvent = new EventEmitter<ProductModel>();
  id:Number =0;
  ItemsCount:Number = 1;
  newproduct:ProductModel={...this.product} as ProductModel;
  constructor( ) { }

  ngOnInit(): void {
   this.id = (this.product?.id ? this.product?.id : 0);

  }

  changeItemsCount(event:any){
    this.newproduct ={...this.product} as ProductModel;
    this.newproduct.AmountOnCart = this.ItemsCount;
  }

  addToCart(){
    this.addItemToCartEvent.emit(this.newproduct);
 }
 
 removeFromCart(){
    this.removeFromCartEvent.emit(this.newproduct);
   }


}
