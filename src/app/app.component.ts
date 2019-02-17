import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    user1Activated = false;
    user2Activated = false;

    usersObsSubscription: Subscription;

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        // Subscribe to the subject and listen for pushed data
        // Observer part of the subject
        this.usersObsSubscription = this.usersService.userActivated.subscribe((id: number) => {
            if (id === 1) {
                this.user1Activated = true;
            } else if (id === 2) {
                this.user2Activated = true;
            }
        });
    }

    ngOnDestroy(): void {
        this.usersObsSubscription.unsubscribe();
    }
}
