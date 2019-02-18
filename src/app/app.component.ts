import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
            username: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            gender: new FormControl('male')
        });
    }

    // We already have the form,
    // don't need a local reference
    onSubmit() {
        console.log(this.signupForm);
        console.log(this.signupForm.value.username);
    }
}
