import { Component, OnInit } from '@angular/core';

import { ProductService } from '@app/modules/shared/services/data/product.service';
import { Observable } from '../../../../../../node_modules/rxjs';
import { Product } from '@app/modules/product/models/product.model';

@Component({
  selector: 'landing-page',
  templateUrl: './landing.page.html'
})
export class LandingPage implements OnInit {
  products$: Observable<Product[]>

  constructor(private product: ProductService) {
  }

  ngOnInit() {
    this.products$ = this.product.getProducts();
  }
}
