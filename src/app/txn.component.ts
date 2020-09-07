import { Component, VERSION, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'txn-list',
  templateUrl: './txn.component.html',
  styleUrls: [ './txn.component.css' ]
})

export class TxnComponent implements OnInit {
  constructor(
    private sharedService: SharedService
  ){}
  ngOnInit(){
    this.sharedService.screenName = 'Transaction History';
  }
}
