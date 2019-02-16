import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
    server: { id: number; name: string; status: string };
    serverName = '';
    serverStatus = '';
    allowEdit = false;
    changesSaved = false;

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        // Retrieve the query parameters and the fragment

        // Wont work if the component does not change
        // The component is not re-rendered with the new info
        // console.log(this.route.snapshot.queryParams);
        // console.log(this.route.snapshot.fragment);

        // Subscribe to watch for any changes
        this.route.queryParams.subscribe((queryParams: Params) => {
            this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        });
        this.route.fragment.subscribe();

        const id: number = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
        this.route.params.subscribe((queryParams: Params) => {
            this.server = this.serversService.getServer(+queryParams['id']);
        });
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server.id, {
            name: this.serverName,
            status: this.serverStatus
        });

        // Mark changes as saved and go back to the previous server
        this.changesSaved = true;
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        // Allow users to leave if they are not allowed to edit the server
        if (!this.allowEdit) {
            return true;
        }

        // If the server was changed and the updates were not saved (user did not click update)
        if (
            (this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
            !this.changesSaved
        ) {
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    }
}
