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
    answer = '';
    genders = ['male', 'female', 'other'];

    suggestUserName() {
        const suggestedName = 'Superuser';
        // Set the value by passing an exact copy of the form
        // with the desired data in the fields.
        // Not the best approach, will reset filled fields.
        // this.signupForm.setValue({
        //     userData: {
        //         username: suggestedName,
        //         email: ''
        //     },
        //     secret: 'pet',
        //     questionAnswer: '',
        //     gender: 'female'
        // });

        // Patch only the desired values, rather than the whole form
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName
            }
        });
        this.signupForm.form.patchValue({ questionAnswer: 'xyz' });
    }

    // Triggered when the form is submitted
    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    onSubmit() {
        console.log(this.signupForm);
    }
}
