import { LastBandService } from './last-bands.service';
import { LastBand } from './last-band.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-last-band-add]',
  templateUrl: './last-band-add.component.html',
  styleUrls: ['./last-band-add.component.css'],
  host:{'class':"col-sm-12 col-md-10"}
})
export class LastBandAddComponent implements OnInit {

  public lastBands : LastBand[];

  constructor(private lastBandService : LastBandService) { }

  ngOnInit() {
    this.lastBandService.getLastBandsAdd().subscribe(resp => {
      this.lastBands = resp;
    });
  }

}
