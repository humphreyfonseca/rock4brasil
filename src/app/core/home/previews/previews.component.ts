import { PreviewService } from './previews.service';
import { Preview } from './preview.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-previews]',
  templateUrl: './previews.component.html',
  styleUrls: ['./previews.component.css'],
  host: { 'class': "col-sm-6 col-md-5" }
})
export class PreviewsComponent implements OnInit {

  public previews: Preview[];


  constructor(private previewService: PreviewService) { }

  ngOnInit() {
    this.previews = this.previewService.getLastPreviews();
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
