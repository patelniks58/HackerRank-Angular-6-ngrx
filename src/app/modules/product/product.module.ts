import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPage} from '@app/modules/product/pages/product/product.page';
import {SharedModule} from '@app/modules/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productReducer } from '@app/modules/product/reducers/product.reducer';
import { ProductEffects } from '@app/modules/product/effects/product.effect';
import { EffectsModule } from '@ngrx/effects';
import { ProductService } from '@app/modules/shared/services/data/product.service';
import { ProductDescriptionComponent } from '@app/modules/product/components/product-description/product-description.component';
import { ProductPurchaseInfoComponent } from '@app/modules/product/components/product-purchase-info/product-purchase-info.component';
import { ProductHeaderIntroComponent } from '@app/modules/product/components/product-header-intro/product-header-intro.component';
import { ProductHeaderCompareComponent } from '@app/modules/product/components/product-header-compare/product-header-compare.component';


export const productRoutes: Routes = [
    {
        path: ':id',
        component: ProductPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes),
        StoreModule.forFeature('product', productReducer),
        EffectsModule.forFeature([ProductEffects]),
    ],
    declarations: [
        ProductPage,
        ProductDescriptionComponent,
        ProductPurchaseInfoComponent,
        ProductHeaderIntroComponent,
        ProductHeaderCompareComponent

    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {
}
