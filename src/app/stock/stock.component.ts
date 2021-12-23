import { Component, OnInit, OnChanges, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Stock } from '../stock.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, OnChanges {

  stock: Stock = {};

  newPrice: number = 0;

  @Input() id: number = 0;
  @Output() priceChange = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collectionService.getStock(this.id).subscribe(payload => {
      this.stock=payload;
    })
  }

  ngOnChanges(): void {
    this.collectionService.getStock(this.id).subscribe(payload => {
      this.stock=payload;
    })
  }

  updatePrice(): void {
    this.collectionService.updateStockPrice(this.stock, this.newPrice).subscribe(payload => {
      this.collectionService.getStock(this.id).subscribe(payload => {
        this.stock=payload;
        console.log("Payload: ", payload)
        this.priceChange.emit(true);
      })
    })
  }

}
