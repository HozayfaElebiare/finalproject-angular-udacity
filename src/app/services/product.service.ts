import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  indexer:Number = 1;
  singleProduct :ProductModel= {
    id:0,
    name:"",
    price:0,
    description:"",
    url:"",
    onCart:false,
    AmountOnCart:0
  };
  productList:ProductModel[] = [];
  
  constructor(private httpClient: HttpClient) { 
    this.httpClient.get("/assets/data.json").subscribe(data =>{
      console.log(data);
      this.productList = data! as ProductModel[];
      console.log(this.productList);

    })
  }


  getProducts():ProductModel[] {

    return this.productList;
  }

  getProduct(id:Number):ProductModel {
    return this.productList.find(product => product.id == id) as ProductModel;
  }

  addToCart(id:Number,amount:Number){
    this.singleProduct = this.productList.find(product => product.id == id) as ProductModel
    var index = this.productList.indexOf(this.singleProduct)
    this.productList[index].onCart = true
    this.productList[index].AmountOnCart = amount

    }
     


  removeFromCart(id:Number){
    this.singleProduct = this.productList.find(product => product.id == id) as ProductModel
    var index = this.productList.indexOf(this.singleProduct)
    this.productList[index].onCart = false
    this.productList[index].AmountOnCart = 0
  }


  getCartItems():ProductModel[] {
    return this.productList.filter(product => product.onCart == true)
  }

  
}
