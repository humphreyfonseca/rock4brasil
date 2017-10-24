import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[id=app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {class : 'col-sm-12 col-md-2'}
  
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
