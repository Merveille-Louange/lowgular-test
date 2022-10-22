import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponentModule } from './components/add-product/add-product.component-module';
import { OrderServiceModule } from './services/order.service-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: ProductComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:productId', component: ProductDetailComponent },
    ]),
    AddProductComponentModule,
    OrderServiceModule,
    ProductComponentModule,
    ProductServiceModule,
    ProductDetailComponentModule,
  ],
  providers: [],
  declarations: [],
  exports: [],
})
export class AppRoutingModule {}
