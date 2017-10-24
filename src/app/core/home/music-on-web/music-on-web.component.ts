import { MusicOnWebService } from './music-on-web.service';
import { MusicOnWeb } from './music-on-web.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-music-on-web]',
  templateUrl: './music-on-web.component.html',
  styleUrls: ['./music-on-web.component.css'],
  host:{'class': "col-sm-6 col-md-5"}
})
export class MusicOnWebComponent implements OnInit {

  public musicOnWebs: MusicOnWeb[];

  constructor(private musicOnWebService: MusicOnWebService) { }

  ngOnInit() {
    this.musicOnWebService.getLastMusicOnWeb().subscribe(resp => {
      this.musicOnWebs = resp;
    });
  }

}
