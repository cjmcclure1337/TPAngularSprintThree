import { Component, OnInit, OnChanges } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Router } from '@angular/router';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit, OnChanges {

  stocks: Stock[] = [
    {id: 1, ticker: "First", price: 1000},
    {id: 2, ticker: "Second", price: 2000},
    {id: 3, ticker: "Third", price: 3000}
  ];

  newTicker: string = "Ticker";
  newPrice: number = 0;
  newName: string = "Company Name"

  id: number = 1;

  displayedColumns: string[] = ["ticker", "price", "delete"]

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
    this.collectionService.getStocks()
      .subscribe(payload => this.stocks = payload);
  }
  
  ngOnChanges(): void {
    this.collectionService.getStocks()
      .subscribe(payload => this.stocks = payload);
  }

  openStock(id: number) {
    console.log("Openning: ", id);
    this.id=id;
  }

  addStock() {
    console.log("Adding: ", this.newTicker);
    this.collectionService.postStock({"ticker":this.newTicker,"name":this.newName,"price":this.newPrice,"quantity":1})
      .subscribe(payload => {
        this.collectionService.getStocks()
          .subscribe(payload => this.stocks = payload);
      })
  }

  deleteStock(id: number) {
    console.log("Deleting: ", id);
  }

}
