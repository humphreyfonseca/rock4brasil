import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Concert } from './concert.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/**
 * 
 * @author Humphrey Fonseca
 * @description Classe de servico para concerto
 * @export
 * @class ConcertsService
 */
@Injectable()
export class ConcertsService{

    private concertsDB: Observable<Concert[]>;

    constructor(private db: AngularFireDatabase) {

    }

    getLastConcerts(){
        this.concertsDB = this.db.list('concerts').valueChanges<Concert>();

        return this.concertsDB.map(resp => {
            const result: Concert[] = new Array();
            resp.forEach((tmp) => {
                let storegeRef = firebase.storage().ref();
                
                tmp.date = new Date(tmp.date);
                result.push(tmp);
            });
            return result;
        });
    }

}