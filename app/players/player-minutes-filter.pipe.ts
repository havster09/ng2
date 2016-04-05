import {PipeTransform, Pipe} from "angular2/core";

@Pipe({
    name:'minutesFilter'
})
export class PlayerMinutesFilterPipe implements PipeTransform{
    transform(value:number){
        return value > 60? Math.floor(value/60) + ':' + (value % 60) : <string><any>value;
    }
}