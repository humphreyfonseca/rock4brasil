import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Editor } from './../editor-reviews/editor.model';
import { LastBand } from './last-band.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
/**
 * 
 * @author Humphrey fonseca
 * @description Classe de servico para ultimas bandas adicionadas
 * @export
 * @class LastBandService
 */
@Injectable()
export class LastBandService {

    private lastBandsDB : Observable<LastBand[]>;
    

    constructor(private db : AngularFireDatabase){}

    getLastBandsAdd(){
        this.lastBandsDB = this.db.list("lastBands").valueChanges<LastBand>();
        
        return this.lastBandsDB.map(resp =>{
            const result: LastBand[] = new Array();
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