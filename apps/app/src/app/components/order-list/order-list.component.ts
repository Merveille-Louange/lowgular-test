import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {OrderModel} from "../../models/order.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-order-list',
  styleUrls: ['./order-list.component.scss'],
  templateUrl: './order-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent {
  readonly orderList$: Observable<OrderModel[]> = this.orderService.getAll();


  constructor(public orderService:OrderService) {
  }

}
