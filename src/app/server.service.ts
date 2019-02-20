import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        // We don't need custom headers,
        // but some backends might
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        // The post method only creates an observable, not an actual post request.
        // It must be subscibed to before it will be sent.
        // With firebase, an endpoint can be specified (data.json)
        return this.http.post('https://udemy-ng-http-polsom2m.firebaseio.com/data.json', servers, {
            headers: headers
        });
    }
}
