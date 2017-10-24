import { UsersReviewsService } from './users-reviews.service';
import { UserReview } from './user-review.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=app-users-reviews]',
  templateUrl: './users-reviews.component.html',
  styleUrls: ['./users-reviews.component.css'],
  host: {'class':"col-sm-6 col-md-5"}
})
export class UsersReviewsComponent implements OnInit {

  public userReviews: UserReview[]

  constructor(private usersReviewsService: UsersReviewsService) { }

  ngOnInit() {
    this.usersReviewsService.getLastUsersReviews().subscribe(resp => {
      this.userReviews = resp;
    });
  }

}
