import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
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
            if (item[propertyName] === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
