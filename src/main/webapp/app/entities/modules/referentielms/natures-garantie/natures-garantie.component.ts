import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-natures-garantie',
  templateUrl: './natures-garantie.component.html',
  styleUrls: ['./natures-garantie.component.scss'],
})
export class NaturesGarantieComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
