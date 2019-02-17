import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Get the element with the local reference 'form'
    // which is, of course, the form itself,
    // via ViewChild rather than passing it via onSubmit.
    // Merely an alternative method.
    @ViewChild('form') signupForm: NgForm;

    defaultQuestion = 'teacher';

    suggestUserName() {
        const suggestedName = 'Superuser';
    }

    // Triggered when the form is submitted
    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    onSubmit() {
        console.log(this.signupForm);
    }
}
