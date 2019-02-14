// Custom directive, opposite of ngIf

import { Directive, Input, TemplateRef, ViewContainerRef, Output } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    // Property acts like a method via set
    @Input() set appUnless(condition: boolean) {
        if (!condition) {
            // Create a new view with the template
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            // Clear this location in the DOM
            this.vcRef.clear();
        }
    }

    // Get the template and the place in the document to render
    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}
