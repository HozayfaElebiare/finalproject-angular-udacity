import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product.module';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:ProductModel[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.productList = this.productService.getProducts();

  }

  addItemToCart(product:ProductModel){
    this.productService.addToCart(product.id,product.AmountOnCart);
  }
  

  removeFromCart(product:ProductModel){
    this.productService.removeFromCart(product.id);
  }


}
