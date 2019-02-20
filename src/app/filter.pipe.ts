// Note: It is generally recommended to move filter
// logic into the component itself, rather than  use
// a filter pipe. Then you can choose the method and
// frequency by which you filter.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    // By default the pipe does not recheck when data
    // is changed on the page. Use pure:false to enable
    // this behaviour.
    // CAUTION: Very performance intensive, use with care.
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: string, propertyName: string): any {
        // If array of servers is zero
        if (value.length === 0 || filterString === '') {
            return value;
        }

        // Check the specified property of each
        // server against the filterString
        const resultArray = [];
        for (const item of value) {
            // Return servers that have the property match the filter
            if (item[propertyName].includes(filterString)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
