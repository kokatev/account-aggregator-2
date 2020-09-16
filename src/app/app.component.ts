import { Component, VERSION } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  constructor(
    public shrdSvc: SharedService
  ){
  }
  name = 'Angular ' + VERSION.major;
}
