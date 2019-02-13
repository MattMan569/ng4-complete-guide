import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    // Disable CSS encapsulation
    // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
    // By default, all properties of components are not
    // accessible outside of that component, use @Input
    // Aliases can be defined as parameters of this input

    // tslint:disable-next-line:no-input-rename
    @Input('srvElement') element: {
        type: string;
        name: string;
        content: string;
    };

    constructor() {}

    ngOnInit() {}
}
