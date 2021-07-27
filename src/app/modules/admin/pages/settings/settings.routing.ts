import { Route } from '@angular/router';
import { SettingsComponent } from 'app/modules/admin/pages/settings/settings.component';
import { SettingsBrandsResolver, InventoryCategoriesResolver, InventoryProductsResolver, InventoryTagsResolver, InventoryVendorsResolver } from '../../pages/settings/settings.resolvers';

export const settingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent,
        resolve  : {
            brands    : SettingsBrandsResolver,
            categories: InventoryCategoriesResolver,
            products  : InventoryProductsResolver,
            tags      : InventoryTagsResolver,
            vendors   : InventoryVendorsResolver
        }
    }
];
