// The canDeactivate method requires information from within the component
// to determine whether or not navigating away should be allowed.
//
// However, a guard always needs to be a service.
// This would not allow us to access the code within the component.
//
// We use an interface to force the component to implement the required
// logic for the guard service to operate.

import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// Wraps an interface, forcing a component to implement the canDeactivate method
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    // Requires an implementation of CanComponentDeactivate as a parameter,
    // which the component must implement
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // Execute the component's canDeactivate
        return component.canDeactivate();
    }
}
