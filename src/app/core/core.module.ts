import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [HeaderComponent, HomeComponent],

    // Header uses dropdown directive and has routes
    imports: [SharedModule, AppRoutingModule],

    // Using the selector of the header component in the
    // app component template, need to export it
    exports: [AppRoutingModule, HeaderComponent],

    // The core module is imported and thus loaded eagerly,
    // so all services are still provided as a single instance at the root level.
    //
    // Auth guard is only used in the recipes routing module, so while it is not wrong
    // to provide it application wide, we can move it to that module exclusively to
    // allow for it to be lazily loaded.
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService /* AuthGuard */]
})
export class CoreModule {}
