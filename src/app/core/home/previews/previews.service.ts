import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Preview } from './preview.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class PreviewService{

    
    private previewsDB: Observable<Preview[]>;

    constructor(private db: AngularFireDatabase){

    }

    getLastPreviews(){
        this.previewsDB = this.db.list('previews').valueChanges<Preview>();

        return this.previewsDB.map(resp => {
            const result: Preview[] = new Array();
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