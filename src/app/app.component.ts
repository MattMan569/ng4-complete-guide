import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    oddNumbers: number[] = [];
    evenNumbers: number[] = [];

    onGameTick(eventNum: number) {
        console.log(eventNum);

        if (eventNum % 2 === 0) {
            this.evenNumbers.push(eventNum);
        } else {
            this.oddNumbers.push(eventNum);
        }
    }
}
