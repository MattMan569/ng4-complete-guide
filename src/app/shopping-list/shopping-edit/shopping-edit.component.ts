import { Component, OnInit, OnDestroy } from '@angular/core';
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
    private subscription: Subscription;
    private editMode = false;
    private editedItemIndex: number;

    constructor(private slService: ShoppingListService) {}

    ngOnInit() {
        this.subscription = this.slService.startedEditing.subscribe((index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
        });
    }

    // Add an item to the shopping list
    onAddItem(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);

        // Add the new ingredient to the service's list
        this.slService.addIngredient(newIngredient);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
