import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as productActions from '../../actions/product.action'
import { Product } from '@app/modules/product/models/product.model';


@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {
    product$: Observable<Product>
    constructor(
        private route: ActivatedRoute,
        private store: Store<Product>
    ) {}

    ngOnInit() {
        this.loadProduct()
        this.product$ = this.store.select(product => product)
    }

    loadProduct() {
        this.route.paramMap.subscribe(params => {
            this.store.dispatch(new productActions.GetProductAction(params.get('id')))
        })
    }

}

