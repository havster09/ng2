import { Injectable } from 'angular2/core';
import { IPlayer } from './player';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerService {
    private _productUrl = 'api/players/players.json';

    constructor(private _http: Http) { }

    getProducts(): Observable<IPlayer[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IPlayer[]>response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}