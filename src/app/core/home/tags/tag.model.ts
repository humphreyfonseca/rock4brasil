/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto tag
 * @export
 * @class Tag
 */
export class Tag{
    private id : number;
    private title : string;
    private rating : number;

    constructor(id : number, title : string, rating : number){
        this.id = id;
        this.title = title;
        this.rating = rating;
    }
}