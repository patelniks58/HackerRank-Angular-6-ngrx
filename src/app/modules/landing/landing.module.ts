import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@app/modules/landing/pages/landing/landing.page';
import {SharedModule} from '@app/modules/shared/shared.module';

import { ProductService } from '@app/modules/shared/services/data/product.service';

export const landingRoutes: Routes = [
    {
        path: '',
        component: LandingPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(landingRoutes)
    ],
    declarations: [
        LandingPage
    ],
    providers: [ ProductService ]
})
export class LandingModule {
}
