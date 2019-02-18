import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
            // Constructor args are the default value
            username: new FormControl(null),
            email: new FormControl(null),
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
