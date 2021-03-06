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

  stocks: Stock[] = [];

  newTicker: string = "Ticker";
  newPrice: number = 0;
  newName: string = "Company Name"

  id: number = 0;

  displayedColumns: string[] = ["ticker", "edit", "delete"]

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
    this.collectionService.getStocks()
      .subscribe(payload => this.stocks = payload);
  }
  
  ngOnChanges(): void {
    this.collectionService.getStocks()
      .subscribe(payload => this.stocks = payload);
  }

  updateStocks(): void {
    this.collectionService.getStocks()
      .subscribe(payload => this.stocks = payload);
  }

  openStock(id: number) {
    console.log("Openning: ", id);
    this.id=id;
  }

  editStock(id: number) {
    this.router.navigateByUrl("/stocks/" + id + "/edit")
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
    this.collectionService.deleteStock(id)
      .subscribe(payload => {
        this.collectionService.getStocks()
          .subscribe(payload => this.stocks = payload);
      })
  }

}
