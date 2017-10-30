import { TagsService } from './tags.service';
import { Tag } from './tag.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-tags]',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  host:{'class':"col-sm-6 col-md-5"}
})
export class TagsComponent implements OnInit {

  public tags : Tag[];

  constructor(private tagsService : TagsService) { }

  ngOnInit() {
    this.tagsService.getHighRatingTags().subscribe(resp => {
      this.tags = resp;

    });
  }

}
