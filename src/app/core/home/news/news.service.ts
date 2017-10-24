import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Editor } from './../editor-reviews/editor.model';
import { New } from './new.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe de servico de noticias
 * @export
 * @class NewsService
 */
@Injectable()
export class NewsService {

    private newsBD: Observable<New[]>;

    constructor(private db: AngularFireDatabase) {

    }

    getLastNews() {

        this.newsBD = this.db.list('news').valueChanges<New>();

        return this.newsBD.map(resp => {
            const result: New[] = new Array();
            resp.forEach((newTmp) => {
                console.log("getLastNews --> newTmp");
                console.log(newTmp);
                let storegeRef = firebase.storage().ref();                
                storegeRef.child(newTmp.imgPath).getDownloadURL().then((url) => {
                    newTmp.imgUrl = url;
                }).catch((error) => {
                    console.log(error);
                })
                newTmp.date = new Date(newTmp.date);
                result.push(newTmp);


            });
            return result;
        });
    }

}