import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';

    ngOnInit() {
        // Get info from authentication -> 'Web Setup'
        firebase.initializeApp({
            apiKey: 'AIzaSyB8MwYtAlxz7Hx00DpNe3hMbrAXypWAiDU',
            authDomain: 'ng-recipe-book-polsom2m.firebaseapp.com'
        });
    }

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }
}
