// Toggles the site's dropdowns by adding the
// 'open' class to divs with the btn-group class

import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // Attach the open class when isOpen is true
    @HostBinding('class.open') isOpen = false;

    // Listen for click events
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    constructor() {}
}
