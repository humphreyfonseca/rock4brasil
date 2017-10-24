/**
 * 
 * @author Humphrey  Fonseca
 * @description Classe que representa o objeto Banda
 * @export
 * @class band
 */
export class Band {
    private id : number;
    private name : string;

    constructor(id : number, name : string){
        this.id = id;
        this.name = name;
    }
}