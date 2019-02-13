import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
    newServerContent = '';

    constructor() {}

    ngOnInit() {}

    // Getting the whole HTML element by local reference
    // Access data with its value member
    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.newServerContent
        });
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: nameInput.value,
            serverContent: this.newServerContent
        });
    }
}
