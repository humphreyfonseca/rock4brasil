import { Editor } from './../editor-reviews/editor.model';
/**
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto intrevista
 * @export
 * @class Interview
 */
export class Interview{

    private id : number;
    private title : string;
    private date : Date;
    private editor : Editor;

    constructor(id : number, title : string, date : Date, editor : Editor){
        this.id = id;
        this.title = title;
        this.date = date;
        this.editor = editor;

    }

}