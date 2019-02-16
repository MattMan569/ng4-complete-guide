import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {}

    // Navigate to the servers component programmatically
    // rather than with <a routerLink="/servers">Servers</a>
    onLoadServers() {
        this.router.navigate(['/servers']);
    }

    onLoadServer(id: number) {
        // '/servers/1/edit?allowEdit=1#loading'
        this.router.navigate(['/servers', id, 'edit'], {
            queryParams: { allowEdit: '1' },
            fragment: 'loading'
        });
    }

    onLogin() {
        this.authService.login();
    }

    onLogout() {
        this.authService.logout();
    }
}
