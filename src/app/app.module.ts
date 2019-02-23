import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],

    // Import the AppRoutingModule module last, to ensure proper routing
    imports: [
        BrowserModule,
        HttpModule,
        // RecipesModule, lazy load this module
        ShoppingListModule,
        SharedModule,
        AuthModule,
        CoreModule,
        AppRoutingModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}
