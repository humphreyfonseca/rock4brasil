import { ArticleService } from './../article.service';
import { Article } from './../article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-box-list',
  templateUrl: './article-box-list.component.html',
  styleUrls: ['./article-box-list.component.css'],
  host:{'class' : 'col-md-2'}
})
export class ArticleBoxListComponent implements OnInit {

  public articles : Article[];

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.articleService.getLastArticles().subscribe(resp =>{
      this.articles = resp;
    });
  }

}
