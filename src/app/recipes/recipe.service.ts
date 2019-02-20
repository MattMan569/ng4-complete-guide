import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

// Injecting shopping list service
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Burger & Fries',
            'A big juicy burger with a side of fries.',
            'https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 1),
                new Ingredient('Cheese', 1),
                new Ingredient('Pickles', 2),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Steak & Onions on Potatoes',
            'A succulent steak topped with carmalized onions all on a heap of potatoes.',
            'https://spicysouthernkitchen.com/wp-content/uploads/cubed-steak-8.jpg',
            [new Ingredient('Steak', 1), new Ingredient('Onions', 5), new Ingredient('Potatoes', 2)]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        // Return a direct reference to the array
        // return this.recipes;

        // Return a new copy of the array
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
