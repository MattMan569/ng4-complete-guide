import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

// Hold all of the app's routes
const appRoutes: Routes = [
    // path, action (load component)
    { path: '', component: HomeComponent },

    // localhost:4200/users
    {
        path: 'users',
        component: UsersComponent,
        children: [
            // Load the single user component by user ID and name
            // The colon designates a dynamic path segment
            { path: ':id/:name', component: UserComponent }
        ]
    },

    {
        path: 'servers',
        // All of the guards that apply to this and all child routes
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        // Child routes of servers
        children: [
            // 'servers/' is always prepended to the route
            // The server resolver gives access to the server object when the route is loaded
            // Very important when getting data asynchronously
            // The resolver fetches data, then loads the component
            { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
            {
                path: ':id/edit',
                component: EditServerComponent,
                canDeactivate: [CanDeactivateGuard]
            }
        ]
    },

    // Page not found / invalid route
    // { path: 'not-found', component: PageNotFoundComponent },
    // Display a page with the error message specified in 'data'
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },

    // Wildcard route, this should be the last route
    { path: '**', redirectTo: '/not-found' },

    // Empty path
    { path: '', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
    // Don't need declarations, already declared in app.module

    imports: [RouterModule.forRoot(appRoutes)],

    // Old browsers can't handle Angular routing, and servers
    // that give a 404 error rather than return index.html
    // when a link is not resolveable also break the routing
    // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],

    // Export the router module to modules that import this module
    exports: [RouterModule]
})
export class AppRoutingModule {}
