import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?:ProductModel;
  id:Number =0;
  ItemsCount:Number = 1;

  constructor(private productService:ProductService ) { }

  ngOnInit(): void {
   this.id = (this.product?.id ? this.product?.id : 0);

  }


  addToCart(){

    this.productService.addToCart(this.id,this.ItemsCount);
 }
 
 removeFromCart(){
   this.productService.removeFromCart(this.id);
 }

//   addToCart(){
//       alert(`${this.ItemsCount} of ${this.product?.name} added to your cart `);
//       this.product!.AmountOnCart = this.ItemsCount;
//       this.product!.onCart = true;

//   }

//  removeFromCart(){
//     alert(`${this.ItemsCount} of ${this.product?.name} added to your cart `);
//     this.product!.AmountOnCart = 0;
//     this.product!.onCart = false;

// }



}
