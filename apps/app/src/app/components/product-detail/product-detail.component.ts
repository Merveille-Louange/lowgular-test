import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  styleUrls: ['./product-detail.component.scss'],
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  id:any = "";
   productDetail$: Observable<ProductModel> = this._productService.getOne(this.id);

  constructor(private _productService: ProductService, private route:ActivatedRoute) {
    route.paramMap.subscribe(params=>{
      this.id = params.get("productId");
       this.productDetail$ = this._productService.getOne(this.id);

    })
  }
}
