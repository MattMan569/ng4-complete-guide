import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [DropdownDirective],
    // Very important: always import the common module
    // in every feature module
    exports: [CommonModule, DropdownDirective]
})
export class SharedModule {}
