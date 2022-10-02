import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { OrderModel } from '../models/order.model';

@Injectable()
export class OrderService {
  private _alterOrderSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public alterOrder$: Observable<string> = this._alterOrderSubject.asObservable();
  private orderList: Array<OrderModel> = [];

  constructor(private _httpClient: HttpClient) {
  }



  getAll(): Observable<OrderModel[]> {
    return of(this.orderList);
  }


  placeNewOrder(order: OrderModel): Observable<string> {
    this.orderList.unshift(order);
    return of("success");
  }
}
