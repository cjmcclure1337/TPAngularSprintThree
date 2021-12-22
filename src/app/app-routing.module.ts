import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { StockComponent } from './stock/stock.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  {path: "funds", component: FundsComponent},
  {path: "funds/:id", component: FundComponent},
  {path: "stocks", component: StocksComponent},
  {path: "stocks/:id", component: StockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
