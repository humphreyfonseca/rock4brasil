import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Editor } from './../editor-reviews/editor.model';
import { MusicOnWeb } from './music-on-web.model';
import * as firebase from 'firebase';
/**
 * 
 * 
 * @author Hunmphrey Fonseca
 * @description Classe de servico para Musica na Web
 * @export
 * @class MusicOnWebService
 */
@Injectable()
export class MusicOnWebService {

    private musicOnWebsDB: Observable<MusicOnWeb[]>;

    constructor(private db: AngularFireDatabase) {

    }

    getLastMusicOnWeb() {        
        this.musicOnWebsDB = this.db.list('musicOnWeb').valueChanges<MusicOnWeb>();

        return this.musicOnWebsDB.map(resp => {
            const result: MusicOnWeb[] = new Array();
            resp.forEach((tmp) => {      
                let storegeRef = firebase.storage().ref();                
                storegeRef.child(tmp.imgPath).getDownloadURL().then((url) => {
                    tmp.imgUrl = url;
                }).catch((error) => {
                    console.log(error);
                })
                tmp.date = new Date(tmp.date);                
                result.push(tmp);


            });
            return result;
        });
    }
}