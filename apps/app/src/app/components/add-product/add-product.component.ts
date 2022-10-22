import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  styleUrls: ['./add-product.component.scss'],
  templateUrl: './add-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
  });

  constructor(private _productService: ProductService, private route: Router) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create(productForm.value).subscribe(data=>{
      this.route.navigateByUrl("/product");

    });

  }
}
