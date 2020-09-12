import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { TxnComponent } from './txn.component';
import { DashboardComponent } from './dashboard.component';
import { PayComponent } from './pay.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'txn', component: TxnComponent},
  { path: 'pay', component: PayComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }