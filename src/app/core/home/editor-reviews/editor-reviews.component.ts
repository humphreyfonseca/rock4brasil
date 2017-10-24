import { EditorReviewsService } from './editor-reviews.service';
import { EditorReviews } from './editor-reviews.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-editor-reviews]',
  templateUrl: './editor-reviews.component.html',
  styleUrls: ['./editor-reviews.component.css'],
  host: {class :'col-sm-6 col-md-5'}
  
})

export class EditorReviewsComponent implements OnInit {
  
  public editorReviews: EditorReviews[];

  constructor(private editorReviewsService: EditorReviewsService) { }

  ngOnInit() {
    console.log('EditorReviewsComponent -- ngOnInit');
    this.editorReviewsService.getLastEditorReviews().subscribe(resp =>{
      this.editorReviews = resp;
      console.log(this.editorReviews);
    });
    
  }

}
