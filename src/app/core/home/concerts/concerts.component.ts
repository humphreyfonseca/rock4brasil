import { ConcertsService } from './concerts.service';
import { Concert } from './concert.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-concerts]',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css'],
  host:{'class':"col-sm-12 col-md-2"}
})
export class ConcertsComponent implements OnInit {

  public concerts : Concert[];

  constructor(private concertsService : ConcertsService) { }

  ngOnInit() {
    this.concerts = this.concertsService.getLastConcerts();
  }

}
