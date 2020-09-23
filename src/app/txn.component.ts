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
      timestamp: '09-22-2020 12:38PM IST',
      color: 'darkgray'
    },
    {
      type: 'Dining',
      amount: '₹ 3,000.00',
      icon: 'fa fa-utensils',
      timestamp: '09-20-2020 12:38PM IST',
      color: 'green'
    },
    {
      type: 'Medical',
      amount: '₹ 14,999.00',
      icon: 'fa fa-syringe',
      timestamp: '09-15-2020 04:00PM IST',
      color: 'red'
    },
    {
      type: 'Shopping',
      amount: '₹ 22,500.00',
      icon: 'fa fa-shopping-bag',
      timestamp: '09-12-2020 08:47PM IST',
      color: 'orange'
    },
    {
      type: 'Electricity',
      amount: '₹ 7,500.00',
      icon: 'fa fa-bolt',
      timestamp: '09-10-2020 06:09AM IST',
      color: 'brown'
    },
    {
      type: 'Housing',
      amount: '₹ 1,25,000.00',
      icon: 'fa fa-building',
      timestamp: '08-31-2020 05:00AM IST',
      color: 'lightseagreen'
    },
    {
      type: 'Travel',
      amount: '₹ 35,000.00',
      icon: 'fa fa-plane',
      timestamp: '26-09-2019 02:58AM IST',
      color: 'purple'
    }
    
  ];

  ngOnInit(){
    this.sharedService.screenName = 'Transaction History';
  }
}
