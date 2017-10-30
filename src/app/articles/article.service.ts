import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Article } from './article.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  private articlesDB :Observable<Article[]>;

  constructor(private db: AngularFireDatabase) { }

  getLastArticles() {
        this.articlesDB = this.db.list('articles').valueChanges<Article>();

        return this.articlesDB.map(resp => {
            const result: Article[] = new Array();
            resp.forEach((tmp) => {                
                tmp.date = new Date(tmp.date);
                result.push(tmp);


            });
            return result;
        });
    }

}
