import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
    // The recipe service will be destroyed when navigating away
    // to the shopping list component, losing any added recipes.
    // Provide it in the app component instead.
    // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
