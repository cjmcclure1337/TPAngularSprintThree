import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Fund } from '../fund.model';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  fund: Fund = {};

  id = 0;

  constructor(private route:ActivatedRoute, private collectionService:CollectionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
      this.collectionService.getFund(this.id).subscribe(payload=>{
        console.log(payload);
        this.fund = payload;
      })
    })
  }

}
