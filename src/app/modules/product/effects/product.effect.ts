import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

import {Effect, Actions} from '@ngrx/effects'
import {Action} from '@ngrx/store'

import * as productActions from './../actions/product.action';
import { ProductService } from '@app/modules/shared/services/data/product.service';

@Injectable()
export class ProductEffects {
    @Effect()
    getProduct$: Observable<Action> = this.actions$
        .ofType<productActions.GetProductAction>(productActions.GET_PRODUCT)
        .switchMap(action => {
            return this.productService.getProduct(action.payload).pipe(
                map(product =>  new productActions.GetProductSuccessAction(product)))
        })

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}

}
