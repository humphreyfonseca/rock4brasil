/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto tag
 * @export
 * @class Tag
 */
export class Tag{
    public id : number;
    public title : string;
    public rating : number;

    constructor(id : number, title : string, rating : number){
        this.id = id;
        this.title = title;
        this.rating = rating;
    }
}