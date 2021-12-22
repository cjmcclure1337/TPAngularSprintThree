import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Fund } from '../fund.model';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  funds: Fund[] = [
    {id: 1, title: "First", description: "1000"},
    {id: 2, title: "Second", description: "2000"},
    {id: 3, title: "Third", description: "3000"}
  ];

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collectionService.getFunds()
      .subscribe(funds => this.funds = funds);
  }

}
