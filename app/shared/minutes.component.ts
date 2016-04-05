import {Component,OnChanges,Input,Output,EventEmitter} from "angular2/core";

@Component({
    selector:'minutes-bar',
    templateUrl:'app/shared/minutes.component.html'
})

export class MinutesComponent implements OnChanges{
    @Input()minutes:number;
    @Input('player-index')playerIndex:number;
    minutesWidth:string;
    @Output()minutesClicked:EventEmitter<Object> = new EventEmitter<Object>();

    ngOnChanges():void{
        this.minutesWidth = this.minutes + '%';
    }

    onClick():void{
        if(this.minutes < 100){
            this.minutes += 5;
            this.minutesClicked.emit([this.playerIndex,this.minutes]);
        }
        else{
            this.minutes = 100;
            this.minutesClicked.emit([this.playerIndex,this.minutes]);
        }
    }
}