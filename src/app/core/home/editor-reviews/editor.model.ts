/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o Editor da materia
 * @export
 * @class Editor
 */
export class Editor{
    public id: number;
    public name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}