/**
 * 
 * Objeto que representa uma Featured do site
 * 
 * @author Humphrey Fonseca
 * @export
 * @class Featured
 */
export class Featured {

    public id: number;
    public imgPath: string;
    public imgUrl: string;
    public title: string;
    public description: string;
    public content: string;

    constructor(id: number, imgPath: string, imgUrl: string, title: string, description: string, content: string){
        this.id = id;
        this.imgPath = imgPath;
        this.imgUrl = imgUrl;
        this.title = title;
        this.description = description;
        this.content = content;

    }




}