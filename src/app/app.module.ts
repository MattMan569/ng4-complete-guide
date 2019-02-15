import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

// Hold all of the app's routes
const appRoutes: Routes = [
    // path, action (load component)
    { path: '', component: HomeComponent },

    // localhost:4200/users
    { path: 'users', component: UsersComponent },

    // Load the single user component by user ID and name
    // The colon designates a dynamic path segment
    { path: 'users/:id/:name', component: UserComponent },

    { path: 'servers', component: ServersComponent }
    { path: 'servers/:id/edit', component: EditServerComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        EditServerComponent,
        ServerComponent
    ],
    // Import RouterModule and register the routes
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    providers: [ServersService],
    bootstrap: [AppComponent]
})
export class AppModule {}
