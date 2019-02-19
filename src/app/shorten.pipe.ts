// To create a custom pipe:
//
// 1) Add pipe decorator
// 2) Implement the transform method
// 3) Add the pipe to the module's declarations array

import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    // Args: pipe input data, pipe parameters
    transform(value: any, limit: number, trail?: string) {
        if (!trail) {
            trail = ' ...';
        }

        if (value.length > limit) {
            return value.substr(0, limit) + trail;
        } else {
            return value;
        }
    }
}
