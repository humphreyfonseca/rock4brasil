import { Editor } from './editor.model';

/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa a materia dos editores
 * @export
 * @class EditorReviews
 */
export class EditorReviews {

    public id: number;
    public title: string;
    public date: Date;
    public imgPath: string;
    public imgUrl: string;
    public editor: Editor;

    constructor(id: number, title: string, date: Date, imgPath: string, imgUrl: string, editor: Editor){
        this.id = id;
        this.title = title;
        this.date = date;
        this.imgPath = imgPath;
        this.imgUrl = imgUrl;
        this.editor = editor;

    }

}