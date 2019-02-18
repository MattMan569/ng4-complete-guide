import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    genders = ['male', 'female'];

    signupForm: FormGroup;

    ngOnInit() {
        this.signupForm = new FormGroup({
            // Key-value pairs for form controls
            // Arg1: default value
            // Arg2: validators

            // Can create another form group to group form controls together
            userData: new FormGroup({
                username: new FormControl(null, Validators.required),
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
}
