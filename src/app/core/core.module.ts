import { InterviewsService } from './home/interviews/interviews.service';
import { ConcertsService } from './home/concerts/concerts.service';
import { LastAlbumsService } from './home/last-albums/last-albums.service';
import { LastBandService } from './home/last-band-add/last-bands.service';
import { TagsService } from './home/tags/tags.service';
import { PreviewService } from './home/previews/previews.service';
import { UsersReviewsService } from './home/users-reviews/users-reviews.service';
import { MusicOnWebService } from './home/music-on-web/music-on-web.service';
import { NewsService } from './home/news/news.service';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorReviewsService } from './home/editor-reviews/editor-reviews.service';
import { FeaturedService } from './home/featured/featured.service';


import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditorReviewsComponent } from './home/editor-reviews/editor-reviews.component';
import { LoginComponent } from './home/login/login.component';
import { NewsComponent } from './home/news/news.component';
import { MusicOnWebComponent } from './home/music-on-web/music-on-web.component';
import { UsersReviewsComponent } from './home/users-reviews/users-reviews.component';
import { LastAlbumsComponent } from './home/last-albums/last-albums.component';
import { PreviewsComponent } from './home/previews/previews.component';
import { TagsComponent } from './home/tags/tags.component';
import { ConcertsComponent } from './home/concerts/concerts.component';
import { LastBandAddComponent } from './home/last-band-add/last-band-add.component';
import { InterviewsComponent } from './home/interviews/interviews.component';

import { ArticlesModule } from './../articles/articles.module';

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        FeaturedComponent,
        EditorReviewsComponent,
        LoginComponent,
        NewsComponent,        
        MusicOnWebComponent,
        UsersReviewsComponent,
        LastAlbumsComponent,
        PreviewsComponent,
        TagsComponent,
        ConcertsComponent,
        LastBandAddComponent,
        InterviewsComponent
    ],
    imports:[
        CommonModule,
        AppRoutingModule,
        ArticlesModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        AppRoutingModule
    ],
    providers:[
        FeaturedService,
        EditorReviewsService,
        NewsService,
        MusicOnWebService,
        UsersReviewsService,
        PreviewService,
        TagsService,
        LastBandService,
        LastAlbumsService,
        ConcertsService,
        InterviewsService
    ]

})
export class CoreModule{}