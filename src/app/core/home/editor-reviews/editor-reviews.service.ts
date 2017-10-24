import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Editor } from './editor.model';
import { Injectable } from '@angular/core';
import { EditorReviews } from './editor-reviews.model';
import * as firebase from 'firebase';

/**
 * 
 * @author Humphrey Fonseca
 * @description Classe responsavel pelos servicos da revisao do editor
 * @export
 * @class EditorReviewsService
 */

@Injectable()
export class EditorReviewsService {

    

    private editorReviewsDB: Observable<EditorReviews[]>;
    
    constructor(private db: AngularFireDatabase) {

    }

    getLastEditorReviews() {
        this.editorReviewsDB = this.db.list('editorReviews').valueChanges<EditorReviews>();

        return this.editorReviewsDB.map(resp => {
            const result: EditorReviews[] = new Array();
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