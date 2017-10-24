import { Editor } from './../editor-reviews/editor.model';
/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o musica na web
 * @export
 * @class MusicOnWeb
 */
export class MusicOnWeb {

    public id: number;
    public title: string;
    public description: string;
    public imgPath: string;
    public imgUrl: string;
    public date: Date;
    public editor: Editor;

    constructor(id: number, title: string, description: string, imgPath: string, imgUrl: string, date: Date, editor: Editor){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgPath = imgPath;
        this.imgUrl = imgUrl;
        this.date = date;
        this.editor = editor;

    }

}