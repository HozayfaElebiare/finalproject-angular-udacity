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
    this.productList = this.productService.getProducts();
  }

}
