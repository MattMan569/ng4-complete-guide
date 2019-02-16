import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServersService } from './servers.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    servers: { id: number; name: string; status: string }[] = [];

    // Activated route is the current route that angular is on
    constructor(
        private serversService: ServersService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.servers = this.serversService.getServers();
    }

    onReload() {
        // By default, unlike the routerLink, paths are always relative to the root
        // rather than the current path location

        // This does not work, relative to servers '/servers/servers'
        this.router.navigate(['servers'], { relativeTo: this.route });

        // This works, relative to root '/servers'
        // this.router.navigate(['servers'], { relativeTo: this.route });
    }
}
