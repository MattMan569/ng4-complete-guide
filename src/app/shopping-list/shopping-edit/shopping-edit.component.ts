import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    // Get access to the form
    @ViewChild('f') slForm: NgForm;

    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    ingredientToEdit: Ingredient;

    constructor(private slService: ShoppingListService) {}

    ngOnInit() {
        // Get the ingredient to be edited when it is clicked
        this.subscription = this.slService.startedEditing.subscribe((index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.ingredientToEdit = this.slService.getIngredient(index);

            // Populate the form with the ingredient to be edited
            this.slForm.setValue({
                name: this.ingredientToEdit.name,
                amount: this.ingredientToEdit.amount
            });
        });
    }

    // Update the shopping list
    onSubmit(form: NgForm) {
        const newIngredient = new Ingredient(form.value.name, form.value.amount);

        if (this.editMode) {
            // Update the existing ingredient
            this.slService.updateIngredient(this.editedItemIndex, newIngredient);
        } else {
            // Add the new ingredient to the service's list
            this.slService.addIngredient(newIngredient);
        }

        // Empty the form and leave edit mode
        form.reset();
        this.editMode = false;
    }

    onDelete() {
        this.slService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }

    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
