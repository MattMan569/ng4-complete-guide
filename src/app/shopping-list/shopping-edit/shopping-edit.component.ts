import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputReference: ElementRef;
    @ViewChild('amountInput') amountInputReference: ElementRef;
    @Output() IngredientAdded = new EventEmitter<Ingredient>();

    constructor() {}

    ngOnInit() {}

    onAddItem() {
        const newIngredient = new Ingredient(
            this.nameInputReference.nativeElement.value,
            this.amountInputReference.nativeElement.value
        );
        this.IngredientAdded.emit(newIngredient);
    }
}
