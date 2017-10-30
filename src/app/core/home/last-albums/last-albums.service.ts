import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Band } from './band.model';
import { LastAlbum } from './last-album.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
/**
 * 
 * @author Humphrey Fonseca
 * @description Classe com os servico para buscar ultimos albuns
 * @export
 * @class LastAlbumsService
 */
@Injectable()
export class LastAlbumsService{

    private lastAlbumsDB : Observable<LastAlbum[]>;
    

    constructor(private db : AngularFireDatabase){}

    getLastAlbums(){
        this.lastAlbumsDB = this.db.list("lastAlbums").valueChanges<LastAlbum>();

        return this.lastAlbumsDB.map(resp =>{
            const result: LastAlbum[] = new Array();
            resp.forEach((tmp) => {
                let storegeRef = firebase.storage().ref();
                storegeRef.child(tmp.imgPath).getDownloadURL().then((url) => {
                    tmp.imgUrl = url;
                }).catch((error) => {
                    console.log(error);
                })                
                result.push(tmp);


            });
            return result;
        });
    }
}