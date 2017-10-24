import { Editor } from './../editor-reviews/editor.model';
/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto reivew de usuario
 * @export
 * @class UserReview
 */
export class UserReview {

    public id: number;
    public title: string;
    public imgPath: string;
    public imgUrl: string;
    public date: Date;
    public editor: Editor;

    constructor(id: number, title: string, imgPath : string, imgUrl: string , date: Date, editor: Editor){
        this.id = id;
        this.title = title;
        this.imgPath = imgPath;
        this.imgUrl = imgUrl;
        this.date =  date;
        this.editor = editor;

    }
}