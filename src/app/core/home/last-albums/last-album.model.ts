import { Band } from './band.model';
/**
 * 
 * @author Humphrey fonseca
 * @description classe que representa o objeto com os ultimos albuns
 * @export
 * @class LastAlbum
 */
export class LastAlbum{
    public id : number;
    public title : string;
    public imgPath : string;
    public imgUrl : string;
    public band : Band;

    constructor(id : number, title : string, imgPath : string, imgUrl : string, band : Band){        
        this.id = id;
        this.title = title;
        this.imgPath = imgPath;
        this.imgUrl = imgUrl;
        this.band = band;

    }

}