import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs-compat';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // Our own observable, emit data every second
        // const myNumbers = Observable.interval(1000);
        // myNumbers.subscribe((number: number) => {
        //     console.log(number);
        // });

        // Custom observable from scratch
        // Fire after 2 seconds, end after 4 seconds, fail after 5 seconds

        // The observer will emit a string
        const myObservable = Observable.create((observer: Observer<string>) => {
            // Send data
            setTimeout(() => {
                observer.next('first package');
            }, 2000);

            // Send data
            setTimeout(() => {
                observer.next('second package');
            }, 4000);

            // Error
            // setTimeout(() => {
            //     observer.error('this does not work');
            // }, 5000);

            // Completion
            setTimeout(() => {
                observer.complete();
            }, 6000);

            // Send data
            // Sends after completion / error, will not work
            setTimeout(() => {
                observer.next('third package');
            }, 8000);
        });

        myObservable.subscribe(
            // Receive data
            (data: string) => {
                console.log(data);
            },
            // Error
            (error: string) => {
                console.log(error);
            },
            // Completion, never receives data
            () => {
                console.log('completed');
            }
        );
    }
}
