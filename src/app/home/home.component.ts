import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    // Navigate to the servers component programmatically
    // rather than with <a routerLink="/servers">Servers</a>
    onLoadServers() {
        this.router.navigate(['/servers']);
    }
}
