import { Component, Input } from '@angular/core';
import { Product } from '@app/modules/product/models/product.model';

@Component({
    selector: 'product-description',
    templateUrl: './product-description.component.html'
})

export class ProductDescriptionComponent {
    @Input() product: Product
    constructor() {}
}
