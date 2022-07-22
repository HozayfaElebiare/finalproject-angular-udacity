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
  
  productList:ProductModel[] = [
    {
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!",
      "onCart": false,
      "AmountOnCart": 0
    },
    {
      "id": 2,
      "name": "Headphones",
      "price": 249.99,
      "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "Listen to stuff!",
      "onCart": false,
      "AmountOnCart": 0
    },
    {
      "id": 3,
      "name": "Backpack",
      "price": 79.99,
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "Carry things around town!",
      "onCart": true,
      "AmountOnCart": 5
    },
    {
      "id": 4,
      "name": "Glasses",
      "price": 129.99,
      "url": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "Now you can see!",
      "onCart": false,
      "AmountOnCart": 0
    },
    {
      "id": 5,
      "name": "Cup",
      "price": 4.99,
      "url": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "Drink anything with it!",
      "onCart": false,
      "AmountOnCart": 0
    },
    {
      "id": 6,
      "name": "Shirt",
      "price": 29.99,
      "url": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      "description": "Wear it with style!",
      "onCart": false,
      "AmountOnCart": 0
    }
  ]
  constructor() { }

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