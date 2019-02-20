import * as firebase from 'firebase';

export class AuthService {
    token: string;

    constructor() {}

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

    isAuthenticated() {
        return this.token != null;
    }
}
