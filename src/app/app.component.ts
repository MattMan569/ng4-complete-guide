import { Component, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
    @ViewChild('form') form: NgForm;

    subscriptionTypes = ['basic', 'advanced', 'pro'];
    defaultSubscription = this.subscriptionTypes[1];
    allTouched = false;
    submittedForm: Object;

    ngDoCheck() {
        // Check all inputs except those with default values
        // for if they were touched
        let allInputsTouched = true;
        (<any>Object).values(this.form.controls).forEach(control => {
            if (!control.touched && control !== this.form.controls['subscription']) {
                allInputsTouched = false;
            }
        });
        this.allTouched = allInputsTouched;
    }

    onSubmit() {
        this.submittedForm = this.form.value;
        console.log(this.submittedForm);
    }

    capitalize(word: string): string {
        return word[0].toUpperCase() + word.substr(1);
    }
}
