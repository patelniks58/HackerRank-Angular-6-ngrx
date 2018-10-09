import {Action} from '@ngrx/store'
import {Product} from '@app/modules/product/models/product.model';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';

// export interface IAction extends Action {
//     payload?: any;
// }

export class GetProductAction implements Action {
    public readonly type = GET_PRODUCT;
    constructor(public payload: string) {}
}

export class GetProductSuccessAction implements Action {
    public readonly type = GET_PRODUCT_SUCCESS;
    constructor(
        public payload: Product
    ) {}
}

export type Actions =
    GetProductAction |
    GetProductSuccessAction ;
