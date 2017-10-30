import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Editor } from './../editor-reviews/editor.model';
import { Interview } from './interview.model';
import * as firebase from 'firebase';
/**
 * 
 * @author Humphrey Fonseca
 * @description classe de servico para intrevista
 * @export
 * @class InterviewsService
 */
@Injectable()
export class InterviewsService{

   private interviewsDB: Observable<Interview[]>;

    constructor(private db: AngularFireDatabase) {

    }

    getLastInterviews(){
        this.interviewsDB = this.db.list('interviews').valueChanges<Interview>();

        return this.interviewsDB.map(resp => {
            const result: Interview[] = new Array();
            resp.forEach((tmp) => {                
                tmp.date = new Date(tmp.date);
                result.push(tmp);
            });
            return result;
        });        
    }
}