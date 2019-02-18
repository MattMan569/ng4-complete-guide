import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    genders = ['male', 'female'];
    forbiddenUsernames = ['Chris', 'Anna'];

    signupForm: FormGroup;

    ngOnInit() {
        this.signupForm = new FormGroup({
            // Key-value pairs for form controls
            // Arg1: default value
            // Arg2: validators

            // Can create another form group to group form controls together
            userData: new FormGroup({
                username: new FormControl(null, [
                    Validators.required,
                    // Will be called by Angular, outside of the class
                    // Must bind it to this class to ensure 'this' in our function
                    // refers to properties of our class
                    this.forbiddenNames.bind(this)
                ]),
                email: new FormControl(null, [Validators.required, Validators.email])
            }),

            // username: new FormControl(null, Validators.required),
            // email: new FormControl(null, [Validators.required, Validators.email]),
            gender: new FormControl('male'),

            // Array of hobby controls, initially empty
            hobbies: new FormArray([])
        });
    }

    // We already have the form,
    // don't need a local reference
    onSubmit() {
        console.log(this.signupForm);
        console.log(this.signupForm.value.userData.username);
    }

    // Add a new control to the form
    onAddHobby() {
        (<FormArray>this.signupForm.get('hobbies')).push(
            new FormControl(null, Validators.required)
        );

        // Or:
        // const control = new FormControl(null, Validators.required);
        // (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    // Explicity define the type to prevent an error message in the HTML code
    getHobbies() {
        return (<FormArray>this.signupForm.get('hobbies')).controls;
    }

    // Create a custom validator
    // Returns a key value pair (key: string, value: bool)
    forbiddenNames(control: FormControl): { [key: string]: boolean } {
        // If the username is a key of the forbidden usernames
        // Returns -1 if it is not found, which is interpretted as true by JS
        if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return { nameIsForbidden: true };
        }
        // If validation is successful, you must pass
        // nothing or null, not false.
        return null;

        // Wrong:
        // return { nameIsForbidden: false };
    }
}
