import { Editor } from './../editor-reviews/editor.model';
import { NewsService } from './news.service';
import { New } from './new.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-news]',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  host: {'class': 'col-md-10'}
})
export class NewsComponent implements OnInit {

  public news: New[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getLastNews().subscribe(result =>{
      console.log('NewsComponent  --> ngOnInit --> subscribe');
      console.log(result);
      this.news = result; 
    });
  }

}
