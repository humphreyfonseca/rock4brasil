import { Editor } from './../editor-reviews/editor.model';
/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que represanta o objeto noticias
 * @export
 * @class New
 */
export class New {

    public id: number;
    public title: string;
    public description: string;
    public date: Date;
    public imgPath: string;
    public imgUrl: string;
    public editor: Editor;

    constructor(id: number, title: string, description: string, date: Date, imgPath: string, imgUrl: string, editor: Editor){
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.imgPath = imgPath;
        this.imgUrl = imgUrl;
        this.editor = editor;

    }

    public setDate(date : Date){
        this.date = date;
    }

    public getDate(){
        return this.date;
    }

}