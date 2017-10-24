import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-box-list',
  templateUrl: './article-box-list.component.html',
  styleUrls: ['./article-box-list.component.css'],
  host:{'class' : 'col-md-2'}
})
export class ArticleBoxListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
