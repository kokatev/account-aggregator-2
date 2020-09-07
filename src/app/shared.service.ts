import { Injectable } from '@angular/core';
import { bankLogos } from './mock.data'

@Injectable()

export class SharedService {
public screenName = 'Dashboard';
public bankLogos = bankLogos;
public bank1Balance = 20030.10;
public bank2Balance = 23338.80;
public bank3Balance = 3332.00;
public totalBalance = 0;

getTotalBalance(){
  let r= this.bank1Balance + this.bank2Balance + this.bank3Balance;
  return r;
}
}