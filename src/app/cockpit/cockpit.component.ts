import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    ViewChild,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    // Set up custom events
    @Output() serverCreated = new EventEmitter<{
        serverName: string;
        serverContent: string;
    }>();
    // tslint:disable-next-line:no-output-rename
    @Output('bpCreated') blueprintCreated = new EventEmitter<{
        serverName: string;
        serverContent: string;
    }>();

    // newServerName = '';
    // newServerContent = '';

    // Get the local reference via @ViewChild('<name>')
    // Is a reference to an HTML element rather than the element itself
    @ViewChild('serverContentInput') serverContentInput: ElementRef;

    constructor() {}

    ngOnInit() {}

    // Getting the whole HTML element by local reference
    // Access data with its value member
    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value,

            // Access the underlying element of the reference
            serverContent: this.serverContentInput.nativeElement.value
        });
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value
        });
    }
}
