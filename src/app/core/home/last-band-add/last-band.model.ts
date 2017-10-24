import { Editor } from './../editor-reviews/editor.model';
/**
 * 
 * @author Humphrey Fonseca
 * @description Classe que representa o objeto ultimas bandas adicionadas
 * @export
 * @class LastBand
 */
export class LastBand {
    private id : number;
    private title : string;
    private imgPath : string;
    private editor : Editor;

    constructor(id : number, title : string, imgPath : string, editor : Editor){
        this.id = id;
        this.title = title;
        this.imgPath = imgPath;
        this.editor = editor;

    }
}