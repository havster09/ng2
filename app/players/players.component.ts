import {Component,OnInit,Input} from 'angular2/core';
import {IPlayer} from './player';

import {PlayerService} from './player.service';
import {StarComponent} from "../shared/star.component";
import {MinutesComponent} from "../shared/minutes.component";
import {PlayerMinutesFilterPipe} from "./player-minutes-filter.pipe";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'players',
    templateUrl: 'app/players/players.html',
    pipes:[PlayerMinutesFilterPipe],
    directives:[StarComponent,MinutesComponent,ROUTER_DIRECTIVES]
})
export class PlayersComponent implements OnInit{
    titlePage:string = "Players";
    errorMessage:string;

    @Input('default-team') defaultTeam:string;


    players:IPlayer[];
    newPlayer:any = {
        fname: '',
        lname: '',
        team: '',
        pos: '',
        active: false,
        number: undefined
    };

    constructor(private _playerService:PlayerService){

    }

    toggleActive(i):void{
        this.players[i].active = !this.players[i].active; 
    }
    
    ngOnInit():void{
        this._playerService.getProducts()
            .subscribe(
                players => this.players = players,
                error => this.errorMessage = <any>error
            );

        if(this.defaultTeam){
            this.newPlayer.team = this.defaultTeam;
        }
    }

    addPlayer():void{
        this.players.push(this.newPlayer);
    }

    onRatingClicked(message:string):void{
        this.titlePage += message;
    }

    onMinutesClicked(playerObj):void{
        this.players[playerObj[0]].minutes = playerObj[1];
    }
}
