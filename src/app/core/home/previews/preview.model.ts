/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto preview
 * @export
 * @class Preview
 */
export class Preview{

    public id : number;
    public title : string;
    public rating : number;
    public imgPath : string;
    public imgUrl : string;
    public date: Date;

    constructor(id : number, title : string, rating : number, imgPath : string, imgUrl : string, date : Date){
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.imgPath = imgPath;
        this.imgUrl = imgUrl;
        this.date = date;
    }
}