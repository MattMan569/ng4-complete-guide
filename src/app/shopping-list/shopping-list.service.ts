import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    // Notify listeners that the ingredient list has changed
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() {}

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);

        // Broadcast a new copy of the changed array
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // Option 1: Would emit an event every time, not great
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // Option 2: Add all ingredients in one go, then emit the event
        // Uses spread operator (...) to push the contents of an array rather than an array itself
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
