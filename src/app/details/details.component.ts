import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    displayDetails = false;
    clicks = [];

    constructor() { }

    ngOnInit() {
    }

    buttonOnClick() {
        this.displayDetails = !this.displayDetails;
        this.clicks.push(new Date().getTime());
    }

    getBgColor(click) {
        return this.clicks.indexOf(click) >= 5 ? 'blue' : 'white';
    }

}
