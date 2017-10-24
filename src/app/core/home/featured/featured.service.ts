




import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { Featured } from './featured.model';

/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Servico para as Featured do site
 * @export
 * @class FeaturedService
 */
@Injectable()
export class FeaturedService {


    private featured: Featured;

    private featuredDB: Observable<Featured>;


    constructor(private db: AngularFireDatabase) {

    }


    getLastFeatured() {
        this.featuredDB = this.db.object('featured').valueChanges<Featured>();

        return this.featuredDB.map(resp => {
            let storegeRef = firebase.storage().ref();
            storegeRef.child(resp.imgPath).getDownloadURL().then((url) => {
                resp.imgUrl = url;
            }).catch((error) => {
                console.log(error);
            })
            console.log("Featured --> resp");
            console.log(resp);

            
            return resp;
        });
    }




}