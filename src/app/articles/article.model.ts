import { Editor } from './../core/home/editor-reviews/editor.model';
/**
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto article
 * @export
 * @class Interview
 */
export class Article{

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