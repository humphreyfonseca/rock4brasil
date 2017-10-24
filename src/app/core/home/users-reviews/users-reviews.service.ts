import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Editor } from './../editor-reviews/editor.model';
import { UserReview } from './user-review.model';
import * as firebase from 'firebase';

/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe com os serivco de reviews de usuarios
 * @export
 * @class UsersReviewsService
 */
@Injectable()
export class UsersReviewsService {

        private usersReviewsDB: Observable<UserReview[]>;

    constructor(private db: AngularFireDatabase) {

    }
    

    getLastUsersReviews() {
        this.usersReviewsDB = this.db.list('usersReviews').valueChanges<UserReview>();

        return this.usersReviewsDB.map(resp => {
            const result: UserReview[] = new Array();
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