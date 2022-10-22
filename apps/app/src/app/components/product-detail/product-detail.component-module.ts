import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailComponent } from './product-detail.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [MatCardModule, CommonModule],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
