import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    // Event listener for the current element
    // Can also listen to custom events
    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    }
}
