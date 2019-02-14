import {
    Directive,
    Renderer2,
    OnInit,
    ElementRef,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    // Colors can be overridden with property binding
    @Input() defaultColor = 'transparent';
    @Input() highlightColor = 'blue';

    // Bind to a property of the current element
    @HostBinding('style.backgroundColor') backgroundColor; // = this.defaultColor;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }

    // Event listener for the current element
    // Can also listen to custom events
    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
