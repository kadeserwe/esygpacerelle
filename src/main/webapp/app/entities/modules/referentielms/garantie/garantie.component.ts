import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-garantie',
  templateUrl: './garantie.component.html',
  styleUrls: ['./garantie.component.scss'],
})
export class GarantieComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
