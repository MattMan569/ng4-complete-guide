import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
        // With Firebase, an endpoint can be specified (data.json)
        // return this.http.post('https://udemy-ng-http-polsom2m.firebaseio.com/data.json', servers, {
        //     headers: headers
        // });

        // POST requests will append data to the Firebase database.
        // Use PUT requests to override the data instead.
        return this.http.put(
            // 'https://udemy-ng-http-polsom2m.firebaseio.com/' + this.generateId() + '.json',
            'https://udemy-ng-http-polsom2m.firebaseio.com/data.json',
            servers,
            {
                headers: headers
            }
        );
    }

    getServers() {
        // return this.http.get('https://udemy-ng-http-polsom2m.firebaseio.com/data.json');
        return this.http
            .get('https://udemy-ng-http-polsom2m.firebaseio.com/data.json')
            .pipe(
                map(response => {
                    // Parse the response as json before returning it
                    const data = response.json();

                    // Just to demonstrate the power of map.
                    // No practical purpose.
                    for (const server of data) {
                        server.name = 'FETCHED_' + server.name;
                    }

                    return data;
                })
            )
            .pipe(
                catchError(error => {
                    // console.log(error);
                    return throwError('Something went wrong!');
                })
            );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-polsom2m.firebaseio.com/appName.json').pipe(
            map(response => {
                return response.json();
            })
        );
    }

    private generateId() {
        return Math.round(Math.random() * 10000);
    }
}
