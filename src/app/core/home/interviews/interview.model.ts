import { Editor } from './../editor-reviews/editor.model';
/**
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto intrevista
 * @export
 * @class Interview
 */
export class Interview{

    public id : number;
    public title : string;
    public date : Date;
    public editor : Editor;

    constructor(id : number, title : string, date : Date, editor : Editor){
        this.id = id;
        this.title = title;
        this.date = date;
        this.editor = editor;

    }

}