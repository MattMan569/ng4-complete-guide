import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
    providers: [LoggingService, AccountsService] // Specify the services this component uses
})
export class NewAccountComponent {
    // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

    // Service injection
    // Specify the service type in the constructor,
    // do not instantiate the service anywhere else
    constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

    onCreateAccount(accountName: string, accountStatus: string) {
        // this.accountAdded.emit({
        //     name: accountName,
        //     status: accountStatus
        // });

        this.accountsService.addAccount(accountName, accountStatus);

        // console.log('A server status changed, new status: ' + accountStatus);

        // Use the service
        this.loggingService.logStatusChange(accountStatus);
    }
}
