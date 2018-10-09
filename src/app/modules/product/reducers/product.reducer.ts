import * as productAction from './../actions/product.action';
import { Product } from '@app/modules/product/models/product.model';

const initialState: Product = {
    id: null,
    imageUrl: null,
    brand: null,
    title: null,
    model: null,
    addToCart: null
};

export function productReducer(state = initialState, action: productAction.Actions): Product {
    switch (action.type) {
        case productAction.GET_PRODUCT_SUCCESS: {
            return action.payload;
        }
        default: {
            return initialState;
        }
    }
}
