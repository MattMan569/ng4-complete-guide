import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

// Add Injectable not to the service to be injected,
// but to the receiving service that will have other
// services injected into it
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}
