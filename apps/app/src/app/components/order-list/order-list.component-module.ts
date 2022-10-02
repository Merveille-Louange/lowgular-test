import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { OrderListComponent } from './order-list.component';
import {RouterModule} from "@angular/router";
import {OrderService} from "../../services/order.service";

@NgModule({
  imports: [MatToolbarModule, MatCardModule, MatListModule, CommonModule, MatButtonToggleModule, RouterModule],
  declarations: [OrderListComponent],
  providers: [OrderService],
  exports: [OrderListComponent]
})
export class OrderListComponentModule {
}
