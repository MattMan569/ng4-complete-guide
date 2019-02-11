import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: #ffffff;
        }
    `]
})
export class ServerComponent {
    serverId = 0;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId = Math.floor(Math.random() * 1000);
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? '#00a000' : '#e00000';
    }
}
