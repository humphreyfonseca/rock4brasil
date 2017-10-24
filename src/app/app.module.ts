import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import * as firebase from 'firebase';


export const firebaseConfig = {
  apiKey: "AIzaSyA_iAif-LbGxAZZq_liLXG8wvli0lZGRYE",
  authDomain: "pmetal-1a8fe.firebaseapp.com",
  databaseURL: "https://pmetal-1a8fe.firebaseio.com",
  projectId: "pmetal-1a8fe",
  storageBucket: "pmetal-1a8fe.appspot.com",
  messagingSenderId: "506374415634"
}

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
