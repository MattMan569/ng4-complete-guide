import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
    user: { id: number; name: string };
    paramsSubscription: Subscription;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.user = {
            // Access the id and name parameters
            // Can only access parameters defined in the route (app.module.ts)
            id: this.route.snapshot.params['id'],
            name: this.route.snapshot.params['name']
        };

        // Get notified whenever the route is updated
        this.paramsSubscription = this.route.params.subscribe(
            // Get the updates params
            (params: Params) => {
                this.user.id = params['id'];
                this.user.name = params['name'];
            }
        );
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
}
