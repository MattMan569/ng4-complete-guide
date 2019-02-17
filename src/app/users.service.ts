import { Subject } from 'rxjs';

export class UsersService {
    // A subject is an observable and an observer at the same time
    // Generally better than using an event emitter
    userActivated = new Subject();
}
