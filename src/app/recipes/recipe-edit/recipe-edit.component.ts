import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode = false;
    recipeForm: FormGroup;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;

            // Edit mode implied that the id of the recipe to
            // edit has also been passed as a query param
            this.editMode = params.id != null;

            // Init the form whenever the route changes
            // This detects whenever the page is loaded
            // or a recipe has been clicked
            this.initForm();
        });
    }

    onSubmit() {
        console.log(this.recipeForm);
    }

    private initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        const recipeIngredients = new FormArray([]);

        // Populate the values if a recipe is being edited
        if (this.editMode) {
            const selectedRecipe = this.recipeService.getRecipe(this.id);
            recipeName = selectedRecipe.name;
            recipeImagePath = selectedRecipe.imagePath;
            recipeDescription = selectedRecipe.description;

            // If the recipe has ingredients
            if (selectedRecipe.ingredients) {
                // Push each ingredient to the list
                for (const ingredient of selectedRecipe.ingredients) {
                    recipeIngredients.push(
                        // Each recipe is a form group with two controls,
                        // its name and amount
                        new FormGroup({
                            name: new FormControl(ingredient.name),
                            amount: new FormControl(ingredient.amount)
                        })
                    );
                }
            }
        }

        this.recipeForm = new FormGroup({
            name: new FormControl(recipeName),
            imagePath: new FormControl(recipeImagePath),
            description: new FormControl(recipeDescription),
            ingredients: recipeIngredients
        });
    }

    // Get the controls of the ingredients array
    getControls() {
        return (this.recipeForm.get('ingredients') as FormArray).controls;
    }
}
