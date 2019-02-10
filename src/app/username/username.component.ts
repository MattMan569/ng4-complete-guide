import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
    disableResetUsername = true;
    username = '';

    constructor() { }

    ngOnInit() {
    }

    checkInput(event: Event) {
        if ((event.target as HTMLInputElement).value === '') {
            this.disableResetUsername = true;
        } else {
            this.disableResetUsername = false;
        }
    }

    resetUsername() {
        this.username = '';
        this.disableResetUsername = true;
    }
}
