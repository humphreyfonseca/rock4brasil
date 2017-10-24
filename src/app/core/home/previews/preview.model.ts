/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto preview
 * @export
 * @class Preview
 */
export class Preview{

    private id : number;
    private title : string;
    private rating : number;
    private imgPath : string;
    private date: Date;

    constructor(id : number, title : string, rating : number, imgPath : string, date : Date){
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.imgPath = imgPath;
        this.date = date;
    }
}