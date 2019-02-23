import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // Lazily load a module via loadChildren './ROUTE_NAME#MODULE_NAME'
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingListComponent }
    // { path: '**', redirectTo: '' }
];

@NgModule({
    // Configure the router routes.
    // Enable preloading on all lazily loaded modules.
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],

    // Export the routes for use in the application.
    exports: [RouterModule]
})
export class AppRoutingModule {}
