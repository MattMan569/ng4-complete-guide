import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css']
    // providers: [LoggingService, AccountsService] // Specify the services this component uses
    // Specifying a provider provides a brand new instance, which we dont want
    // We want the same instance as our parent component so we can access the same array of accounts
    // Don't remove it from the constructor
})
export class NewAccountComponent {
    // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

    // Service injection
    // Specify the service type in the constructor,
    // do not instantiate the service anywhere else
    constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
        // Listen to an event provided in a service
        this.accountsService.statusUpdated.subscribe((status: string) =>
            alert('New status: ' + status)
        );
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        // this.accountAdded.emit({
        //     name: accountName,
        //     status: accountStatus
        // });

        this.accountsService.addAccount(accountName, accountStatus);

        // console.log('A server status changed, new status: ' + accountStatus);

        // Use the service
        // this.loggingService.logStatusChange(accountStatus);
    }
}
