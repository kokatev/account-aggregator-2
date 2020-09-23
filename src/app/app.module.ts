import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'; 

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { TxnComponent } from './txn.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedService } from './shared.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PayComponent } from './pay.component';
import { GraphSummaryComponent } from './graphSummary.component';
import { ConsentComponent } from './consent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, AngularFontAwesomeModule, ChartsModule],
  declarations: [ AppComponent, DashboardComponent, TxnComponent, PayComponent, GraphSummaryComponent, ConsentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SharedService]
})
export class AppModule { }
