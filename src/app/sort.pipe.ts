import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    propertyToSort = 'name';

    transform(value: any, sortProperty?: string): any {
        if (value.length === 0) {
            return value;
        }
        if (sortProperty) {
            this.propertyToSort = sortProperty;
        }

        // Must bind(this)
        return value.sort(this.compare.bind(this));
    }

    private compare(a: any, b: any): number {
        if (a[this.propertyToSort] < b[this.propertyToSort]) {
            return -1;
        }
        if (a[this.propertyToSort] > b[this.propertyToSort]) {
            return 1;
        }
        return 0;
    }
}
