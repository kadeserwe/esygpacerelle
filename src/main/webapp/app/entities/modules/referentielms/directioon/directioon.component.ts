import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-directioon',
  templateUrl: './directioon.component.html',
  styleUrls: ['./directioon.component.scss']
})
export class DirectioonComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
