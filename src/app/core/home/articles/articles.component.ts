import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-articles]',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  host:{'class' : 'col-md-2'}
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
