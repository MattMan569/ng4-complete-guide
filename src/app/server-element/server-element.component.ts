import {
    Component,
    OnInit,
    OnChanges,
    SimpleChanges,
    Input,
    ViewEncapsulation,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    // Disable CSS encapsulation
    // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy {
    // By default, all properties of components are not
    // accessible outside of that component, use @Input
    // Aliases can be defined as parameters of this input

    // tslint:disable-next-line:no-input-rename
    // @Input('srvElement') element: {
    //     type: string;
    //     name: string;
    //     content: string;
    // };
    @Input() name: string;

    // Element part of the current view template
    @ViewChild('heading') header: ElementRef;

    // Element that is the content within another template,
    // passed to this template via ng-content
    @ContentChild('contentParagraph') paragraph: ElementRef;

    constructor() {
        console.log('constructor called!');
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Called before any other lifecycle hook.
        // Use it to inject dependencies, but avoid any serious work here.
        // Add '${implements OnChanges}' to the class.
        console.log('ngOnChanges called!');
        console.log(changes);
    }

    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        console.log('ngOnInit called!');
        console.log(this.header.nativeElement.textContent); // Displays nothing
        console.log(this.paragraph.nativeElement.textContent); // Displays nothing
    }

    ngDoCheck(): void {
        // Called every time that the input properties of a component or a directive are checked.
        // Use it to extend change detection by performing a custom check.
        // Add 'implements DoCheck' to the class.
        console.log('ngDoCheck called!');
    }

    ngAfterContentInit(): void {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
        console.log('ngAfterContentInit called!');
        console.log(this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked(): void {
        // Called after every check of the component's or directive's content.
        // Add 'implements AfterContentChecked' to the class.
        console.log('ngAfterContentChecked called!');
    }

    ngAfterViewInit(): void {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        console.log('ngAfterViewInit called!');
        console.log(this.header.nativeElement.textContent);
    }

    ngAfterViewChecked(): void {
        // Called after every check of the component's view. Applies to components only.
        // Add 'implements AfterViewChecked' to the class.
        console.log('ngAfterViewChecked called!');
    }

    ngOnDestroy(): void {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        console.log('ngOnDestroy called!');
    }
}
