import {NgModule} from '@angular/core';
import {ProductsPage} from '@app/modules/products/pages/products/products.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@app/modules/shared/shared.module';

export const productsRoutes: Routes = [
    {
        path: '',
        component: ProductsPage,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild( productsRoutes )
    ],
    declarations: [
        ProductsPage
    ]
})
export class ProductsModule { }
