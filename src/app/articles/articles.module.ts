import { ArticleService } from './article.service';
import { ArticlesRoutingModule } from './articles-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleBoxListComponent } from './article-box-list/article-box-list.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [ArticleItemComponent, ArticleListComponent, ArticleBoxListComponent, ArticlesComponent],
  exports:[
    ArticleBoxListComponent
  ],
  providers:[
    ArticleService
  ]
})
export class ArticlesModule { }
