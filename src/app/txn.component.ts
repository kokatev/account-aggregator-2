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

  public transactionsData = [
    {
      type: 'Groceries',
      amount: '₹ 5,800.00',
      icon: 'fa fa-shopping-cart',
      timestamp: '5 transactions',
      color: 'darkgray'
    },
    {
      type: 'Dining',
      amount: '₹ 3,000.00',
      icon: 'fa fa-utensils',
      timestamp: '3 transactions',
      color: 'green'
    },
    {
      type: 'Medical',
      amount: '₹ 14,999.00',
      icon: 'fa fa-syringe',
            timestamp: '4 transactions',
      color: 'red'
    },
    {
      type: 'Shopping',
      amount: '₹ 22,500.00',
      icon: 'fa fa-shopping-bag',
      timestamp: '4 transactions',
      color: 'orange'
    },
    {
      type: 'Electricity',
      amount: '₹ 7,500.00',
      icon: 'fa fa-bolt',
      timestamp: '2 transactions',
      color: 'brown'
    },
    {
      type: 'Housing',
      amount: '₹ 75,000.00',
      icon: 'fa fa-building',
      timestamp: '1 transaction',
      color: 'lightseagreen'
    },
    {
      type: 'Travel',
      amount: '₹ 35,000.00',
      icon: 'fa fa-plane',
      timestamp: '4 transactions',
      color: 'purple'
    },
    {
      type: 'Other',
      amount: '₹ 15,000.00',
      icon: 'fa fa-align-justify',
      timestamp: '2 transactions',
      color: 'purple'
    }
    
  ];

  ngOnInit(){
    this.sharedService.screenName = 'Transaction History';
  }
}
