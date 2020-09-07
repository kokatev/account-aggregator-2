import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
constructor(public sharedService: SharedService){}
  ngOnInit(){
    this.sharedService.screenName = 'Dashboard';

  }
}
