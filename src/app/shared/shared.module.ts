import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [DropdownDirective],
    // Very important: always import the common module
    // in every feature module (that uses common ng components)
    exports: [CommonModule, DropdownDirective]

    // Never add providers in a shared module.
    // https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656720
})
export class SharedModule {}
