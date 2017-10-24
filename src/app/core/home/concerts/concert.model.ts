/**
 * 
 * @author humphrey Fonseca
 * @description Classe que representa o objeto com o concerto
 * @export
 * @class Concert
 */
export class Concert{
    private id: number;
    private title : string;
    private date : Date;
    private location : string;

    constructor(id: number, title : string, date : Date, location : string){
        this.id = id;
        this.title = title;
        this.date = date;
        this.location = location;

    }
}