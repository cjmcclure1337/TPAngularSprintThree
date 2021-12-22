import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private collectionService: CollectionService) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params=>{
    //   this.id = +params['id'];
    //   this.collectionService.getStock(this.id).subscribe(payload=>{
    //     console.log(payload);
    //     this.stock = payload;
    //   })
    // })

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
    this.collectionService.updateStockPrice(this.stock).subscribe(payload => {
      this.collectionService.getStock(this.id).subscribe(payload => {
        this.stock=payload;
        console.log("Payload: ", payload)
      })
    })
  }

}
