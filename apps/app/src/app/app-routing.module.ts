import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderFormComponentModule } from './components/order-form/order-form.component-module';
import { OrderListComponentModule } from './components/order-list/order-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', pathMatch:"full", redirectTo:"home" },{ path: 'new-order', component: OrderFormComponent }, { path: 'home', component: OrderListComponent }]), OrderFormComponentModule, OrderListComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
