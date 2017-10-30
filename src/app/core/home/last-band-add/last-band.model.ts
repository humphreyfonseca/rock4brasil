import { Editor } from './../editor-reviews/editor.model';
/**
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto ultimas bandas adicionadas
 * @export
 * @class LastBand
 */
export class LastBand {
    public id : number;
    public title : string;
    public imgPath : string;
    public imgUrl : string;
    public editor : Editor;

    constructor(id : number, title : string, imgPath : string, imgUrl : string, editor : Editor){
        this.id = id;
        this.title = title;
        this.imgPath = imgPath;
        this.imgUrl = imgUrl;
        this.editor = editor;

    }
}