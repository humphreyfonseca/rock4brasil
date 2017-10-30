import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Tag } from './tag.model';
/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe de servico para Tags
 * @export
 * @class TagsService
 */
@Injectable()
export class TagsService {

    private tagsDB : Observable<Tag[]>;
    
    constructor(private db : AngularFireDatabase){

    }

    getHighRatingTags(){
        this.tagsDB = this.db.list('types').valueChanges<Tag>();

        return this.tagsDB;
        
    }
}