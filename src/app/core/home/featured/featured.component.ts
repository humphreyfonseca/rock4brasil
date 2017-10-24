import { FeaturedService } from './featured.service';
import { Featured } from './featured.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[id=app-featured]',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  host: {'class': 'col-sm-6 col-md-5'}
 
})
export class FeaturedComponent implements OnInit {

  public featured  = new Featured (null,null,null,null,null,null);

  constructor(private featuredService: FeaturedService) { }

  ngOnInit() {
    this.featuredService.getLastFeatured().subscribe(res => {
            console.log('getLastFeatured --> subscribe');
            console.log("res");
            console.log(res);
            this.featured = res;
            console.log("this.featured");
            console.log(this.featured);

        });

    
    console.log(this.featured);
  }

}
