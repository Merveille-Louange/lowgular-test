import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  constructor(private _productService: ProductService, private route:Router) {
  }
  readonly productList$: Observable<ProductModel[]> = this._productService.getAll();

  openDetails(id: any): void {
    this.route.navigateByUrl(`product/${id}`)
  }
}
