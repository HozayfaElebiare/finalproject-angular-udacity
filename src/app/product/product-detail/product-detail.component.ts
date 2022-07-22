import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product/product.module';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?:ProductModel;
  id:Number =0;
  ItemsCount:Number = 1;
  initId:String = "";

  constructor(  private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.initId = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id')?.toString()! : "";
    this.id = parseInt(this.initId.toString());
    this.product = this.productService.getProduct(this.id);
  }

  addToCart(){

   this.productService.addToCart(this.id,this.ItemsCount);
}

removeFromCart(){
  this.productService.removeFromCart(this.id);
}

}
