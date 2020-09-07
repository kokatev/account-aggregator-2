import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { TxnComponent } from './txn.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedService } from './shared.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, AngularFontAwesomeModule],
  declarations: [ AppComponent, DashboardComponent, TxnComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SharedService]
})
export class AppModule { }
