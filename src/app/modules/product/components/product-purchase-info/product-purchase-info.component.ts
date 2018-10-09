import { Component, Input } from '@angular/core';
import { Product } from '@app/modules/product/models/product.model';

@Component({
    selector: 'product-purchase-info',
    templateUrl: './product-purchase-info.component.html'
})

export class ProductPurchaseInfoComponent {
    @Input() product: Product
    constructor() {}
}
