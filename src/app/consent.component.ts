import { Component, VERSION, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'fund-transfer',
  templateUrl: './consent.component.html'
})

export class ConsentComponent implements OnInit{
public showModal = false;
  constructor(
    private sharedService: SharedService
  ){}

  ngOnInit(){
    this.sharedService.screenName = 'Information Requested by Lender';
  }

  shareInfo(){
    this.showModal = true;
  }

}
