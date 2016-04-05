import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';   // Load all features

import {PlayerService} from './players/player.service';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {PlayersComponent} from "./players/players.component";
import {PlayerDetailComponent} from "./players/player-detail.component";
import {WelcomeComponent} from "./home/welcome.component";

@Component({
    selector: 'my-app',
    directives:[ROUTER_DIRECTIVES],
    providers:[
        PlayerService,
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS
    ],
    templateUrl: 'app/app.html'
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/players', name: 'Players', component: PlayersComponent },
    { path: '/player/:id', name: 'PlayerDetail', component: PlayerDetailComponent }
])
export class AppComponent {
    titlePage:string = "ng2";
}

