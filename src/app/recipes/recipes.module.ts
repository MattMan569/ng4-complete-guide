import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

import { DropdownDirective } from '../shared/dropdown.directive';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    // Declarations must not appear in more than one module
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ],

    // Very important: always import the common module
    // in every feature module
    imports: [CommonModule, ReactiveFormsModule, AppRoutingModule]
})
export class RecipesModule {}
