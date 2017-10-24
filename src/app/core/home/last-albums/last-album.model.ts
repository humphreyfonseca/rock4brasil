import { Band } from './band.model';
/**
 * 
 * @author Humphrey fonseca
 * @description classe que representa o objeto com os ultimos albuns
 * @export
 * @class LastAlbum
 */
export class LastAlbum{
    private id : number;
    private title : string;
    private imgPath : string;
    private band : Band;

    constructor(id : number, title : string, imgPath : string, band : Band){        
        this.id = id;
        this.title = title;
        this.imgPath = imgPath;
        this.band = band;

    }

}