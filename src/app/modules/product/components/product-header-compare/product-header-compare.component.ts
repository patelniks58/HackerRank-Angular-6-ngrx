import { Component, Input } from '@angular/core';
import { Product } from '@app/modules/product/models/product.model';

@Component({
    selector: 'product-header-compare',
    templateUrl: './product-header-compare.component.html'
})

export class ProductHeaderCompareComponent {
    @Input() product: Product
    constructor() {}
}
