/**
 * 
 * @author humphrey Fonseca
 * @description Classe que representa o objeto com o concerto
 * @export
 * @class Concert
 */
export class Concert{
    public id: number;
    public title : string;
    public date : Date;
    public location : string;

    constructor(id: number, title : string, date : Date, location : string){
        this.id = id;
        this.title = title;
        this.date = date;
        this.location = location;

    }
}