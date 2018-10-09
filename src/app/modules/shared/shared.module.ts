import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductService } from '@app/modules/shared/services/data/product.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule
    ],
    providers: [
        ProductService
    ]
})
export class SharedModule {
}

// TODOM - IMPORT this Module into the required Module
// TODOM - CONFIGURE the root routes to create lazy loading
// TODOM - CONFIGURE sharedRoutes and the routerLink to navigate to the route
// TODOM - CONFIGURE RouterModule
// TODOM - ADD reducer file
// TODOM - CONFIGURE StoreModule with new reducer
// TODOM - ADD actions for new reducer
// TODOM - ADD effects (if needed)
