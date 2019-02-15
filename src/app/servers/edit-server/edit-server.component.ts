import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
    server: { id: number; name: string; status: string };
    serverName = '';
    serverStatus = '';

    constructor(private serversService: ServersService, private route: ActivatedRoute) {}

    ngOnInit() {
        // Retrieve the query parameters and the fragment

        // Wont work if the component does not change
        // The component is not re-rendered with the new info
        console.log(this.route.snapshot.queryParams);
        console.log(this.route.snapshot.fragment);

        // Subscribe to watch for any changes
        this.route.queryParams.subscribe();
        this.route.fragment.subscribe();

        this.server = this.serversService.getServer(1);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server.id, {
            name: this.serverName,
            status: this.serverStatus
        });
    }
}
