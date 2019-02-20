import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error));
    }

    signinUser(email: string, password: string) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                // console.log(response);

                // Redirect the user
                this.router.navigate(['/']);

                // Get and set the token immediately when
                // a user signs in
                firebase
                    .auth()
                    .currentUser.getIdToken()
                    .then((token: string) => {
                        this.token = token;
                    });
            })
            .catch(error => console.log(error));
    }

    // Return the token immediately
    // and refresh it.
    getToken() {
        // Refresh the token asynchronously
        firebase
            .auth()
            .currentUser.getIdToken()
            .then((token: string) => {
                this.token = token;
            });

        return this.token;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
