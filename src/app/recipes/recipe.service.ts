import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ),
        new Recipe(
            'Another Test Recipe',
            'This is simply another test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        )
    ];

    constructor() {}

    getRecipes() {
        // Return a direct reference to the array
        // return this.recipes;

        // Return a new copy of the array
        return this.recipes.slice();
    }
}
