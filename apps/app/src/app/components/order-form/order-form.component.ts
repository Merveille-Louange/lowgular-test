import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {OrderService} from "../../services/order.service";
import {OrderModel} from "../../models/order.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-form',
  styleUrls: ['./order-form.component.scss'],
  templateUrl: './order-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent {
  readonly orderForm: FormGroup = new FormGroup({
    customerName: new FormControl(),
    orderNumber: new FormControl(),
    orderName: new FormControl(),
    price: new FormControl(),
    vendorName: new FormControl(),
    date: new FormControl(),
  });


  //this constructor wasn't generated with lowgular, due to an error
  //occurring in the lowgular service injection
  constructor(public orderService:OrderService, private route:Router) {
  }



  onOrderFormSubmitted(orderForm: FormGroup): void {
      if(!this.orderForm.valid)
        return;
      this.orderService.placeNewOrder(<OrderModel>orderForm.value).subscribe(res=>{
        this.route.navigateByUrl('');
      });
  }
}
