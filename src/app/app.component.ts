import { Component, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
    @ViewChild('form') form: NgForm;

    subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
    defaultSubscription = this.subscriptionTypes[1];
    allTouched = false;
    submittedForm = {};

    ngDoCheck() {
        // Check all inputs except those with default values
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
}
