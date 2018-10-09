import { Component, Input } from '@angular/core';
import { Product } from '@app/modules/product/models/product.model';

@Component({
    selector: 'product-header-intro',
    templateUrl: './product-header-intro.component.html'
})

export class ProductHeaderIntroComponent {
    @Input() product: Product
    constructor() {}
}
