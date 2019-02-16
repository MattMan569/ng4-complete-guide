import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    server: { id: number; name: string; status: string };

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        // id is a number, but the param will always return a string
        // convert it to a number to prevent errors
        const id: number = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
        this.route.params.subscribe((params: Params) => {
            this.server = this.serversService.getServer(+params['id']);
        });
    }

    onEdit() {
        // We are already at '/servers/<ID>, just append /edit to the path
        // Preserve the query params so the edit server component can use them
        this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    }
}
