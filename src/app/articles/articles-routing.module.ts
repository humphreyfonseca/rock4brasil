import { ArticlesComponent } from './articles/articles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleItemComponent } from './article-item/article-item.component';


// const articlesRoutes: Routes = [
//   { path: '', component: ArticleItemComponent},
// ];
const articlesRoutes: Routes = [
  { path: '', component: ArticlesComponent, children: [
    { path: 'article-item', component: ArticleItemComponent },    
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [RouterModule]
  
})
export class ArticlesRoutingModule {}
