import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { OrderFormComponent } from './order-form.component';
import {OrderService} from "../../services/order.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [ReactiveFormsModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, RouterModule],
  declarations: [OrderFormComponent],
  providers: [OrderService],
  exports: [OrderFormComponent]
})
export class OrderFormComponentModule {
}
