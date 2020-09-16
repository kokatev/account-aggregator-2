import { Component, VERSION, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'fund-transfer',
  templateUrl: './pay.component.html',
  styleUrls: [ './pay.component.css' ]
})

export class PayComponent implements OnInit {
  fromBank1;
  fromBank2;
  fromBank3;
  showLoader = false;
  showModal = false;
  constructor(
    private sharedService: SharedService
  ){}
  ngOnInit(){
    this.sharedService.screenName = 'Fund Transfer';
  }

  deductBalance(){
    this.showLoader =
setTimeout(()=>{
this.showModal = true;
},3000);

    this.sharedService.bank1Balance = this.sharedService.bank1Balance -  parseFloat(this.fromBank1.replace(/,/g, ''));

    this.sharedService.bank2Balance = this.sharedService.bank2Balance -  parseFloat(this.fromBank2.replace(/,/g, ''));

    this.sharedService.bank3Balance = this.sharedService.bank3Balance -  parseFloat(this.fromBank3.replace(/,/g, ''));
  }


}
