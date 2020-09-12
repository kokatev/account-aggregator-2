import { Component, VERSION, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'fund-transfer',
  templateUrl: './pay.component.html',
  styleUrls: [ './pay.component.css' ]
})

export class PayComponent implements OnInit {
  constructor(
    private sharedService: SharedService
  ){}
  ngOnInit(){
    this.sharedService.screenName = 'Fund Transfer';
  }
}
