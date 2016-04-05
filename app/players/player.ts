export interface IPlayer{
    id?:number;
    fname:string;
    lname:string;
    team:string;
    pos:string;
    goto_move?:string;
    active:boolean;
    number:number;
    rating:number;
    minutes:number;
}