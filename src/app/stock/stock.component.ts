import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock: Stock = {};

  id = 0;

  constructor(private route:ActivatedRoute, private collectionService:CollectionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
      this.collectionService.getStock(this.id).subscribe(payload=>{
        console.log(payload);
        this.stock = payload;
      })
    })
  }

}
