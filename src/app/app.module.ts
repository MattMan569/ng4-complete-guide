import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    // Import the AppRoutingModule module last, to ensure proper routing
    imports: [
        BrowserModule,
        HttpModule,
        RecipesModule,
        ShoppingListModule,
        SharedModule,
        AuthModule,
        AppRoutingModule
    ],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
