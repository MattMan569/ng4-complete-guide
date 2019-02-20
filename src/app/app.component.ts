import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    appName = this.serverService.getAppName();

    servers = [
        {
            name: 'Testserver',
            capacity: 10,
            id: this.generateId()
        },
        {
            name: 'Liveserver',
            capacity: 100,
            id: this.generateId()
        }
    ];

    constructor(private serverService: ServerService) {}

    onAddServer(name: string) {
        this.servers.push({
            name: name,
            capacity: 50,
            id: this.generateId()
        });
    }

    onSave() {
        // Send the HTTP POST request and subscribe to it.
        // Only gets a single response, will always be unsubscribed automatically.
        this.serverService.storeServers(this.servers).subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        );
    }

    onGet() {
        this.serverService.getServers().subscribe(
            // Good response
            (servers: any[]) => {
                // console.log(servers);
                this.servers = servers;
            },
            // Bad response
            error => {
                console.log(error);
            }
        );
    }

    private generateId() {
        return Math.round(Math.random() * 10000);
    }
}
