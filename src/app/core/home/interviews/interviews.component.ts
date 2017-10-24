import { InterviewsService } from './interviews.service';
import { Interview } from './interview.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-interviews]',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css'],
  host:{'class':"col-sm-12 col-md-2"}
})
export class InterviewsComponent implements OnInit {

  public interviews : Interview[];

  constructor(private interviewsService : InterviewsService) { }

  ngOnInit() {
    this.interviews = this.interviewsService.getLastInterviews();
  }

}
