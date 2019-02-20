import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService
    ) {}

    storeRecipes() {
        const token = this.authService.getToken();

        return this.http.put(
            'https://ng-recipe-book-polsom2m.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes()
        );
    }

    getRecipes() {
        const token = this.authService.getToken();

        this.http
            // To authenticate the request the auth query parameter must be set
            // with a valid token
            .get('https://ng-recipe-book-polsom2m.firebaseio.com/recipes.json?auth=' + token)
            .pipe(
                map((response: Response) => {
                    const recipes: Recipe[] = response.json();

                    // If a recipe is pushed to the database with no ingredients,
                    // it will node contain an ingredient node on the database.
                    // Thus, there will be no ingredient field on that fetched recipe.
                    // Here we ensure each recipe has an ingredient array.
                    for (const recipe of recipes) {
                        if (!recipe.ingredients) {
                            recipe.ingredients = [];
                        }
                    }

                    return recipes;
                })
            )
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }
}
