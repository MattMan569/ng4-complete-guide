import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    OnDestroy
} from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
    intervalReference: NodeJS.Timer;
    incrementing = 0;
    @Output() gameTick = new EventEmitter<number>();

    constructor() {}

    ngOnInit() {}

    onClickStart(): void {
        this.intervalReference = setInterval(() => {
            this.gameTick.emit(this.incrementing++);
        }, 1000);
    }

    onClickStop(): void {
        if (this.intervalReference) {
            clearInterval(this.intervalReference);
            this.intervalReference = undefined;
        }
    }

    ngOnDestroy(): void {
        if (this.intervalReference) {
            clearInterval(this.intervalReference);
        }
    }
}
