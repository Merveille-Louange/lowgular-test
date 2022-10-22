import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {observable, Observable, of} from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  private productList: Array<ProductModel> = [];

  constructor(private _httpClient: HttpClient) {
  }

  create(product: ProductModel): Observable<object> {
    // this.productList.unshift(product);
    // return of();
    return this._httpClient.post("https://fakestoreapi.com/products", product)
  }

  getAll(): Observable<ProductModel[]> {
    let result:Observable<ProductModel[]>= new Observable<ProductModel[]>();
     // @ts-ignore
    result = this._httpClient.get("https://fakestoreapi.com/products")
  return result;
  }
  getOne(id: any): Observable<any> {
    return this._httpClient.get(`https://fakestoreapi.com/products/${id}`)

  }

}
