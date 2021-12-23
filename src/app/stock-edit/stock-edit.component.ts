import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  newTicker: string = "Ticker";
  newPrice: number = 0;
  newName: string = "Company Name"

  stock: Stock = {};

  constructor(private route: ActivatedRoute, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.collectionService.getStock(+params['id']).subscribe(payload=>{
        console.log(payload);
        this.stock = payload;
      })
    })
  }

  updateStock() {
    console.log("Updating: ", this.stock.ticker);

  }

}
