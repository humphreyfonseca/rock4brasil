import { LastAlbum } from './last-album.model';
import { LastAlbumsService } from './last-albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-last-albums]',
  templateUrl: './last-albums.component.html',
  styleUrls: ['./last-albums.component.css'],
  host:{'class':"col-sm-12 col-md-2"}
})
export class LastAlbumsComponent implements OnInit {

  public lastAlbums : LastAlbum[];

  constructor(private lastAlbumsService : LastAlbumsService) { }

  ngOnInit() {
    this.lastAlbums = this.lastAlbumsService.getLastAlbums();
  }

}
