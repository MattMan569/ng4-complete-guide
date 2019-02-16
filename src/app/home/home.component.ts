import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // Our own observable, emit data every second
        const myNumbers = Observable.interval(1000);
        myNumbers.subscribe((number: number) => {
            console.log(number);
        });
    }
}
