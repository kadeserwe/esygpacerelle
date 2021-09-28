import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-garantiie',
  templateUrl: './garantiie.component.html',
  styleUrls: ['./garantiie.component.scss'],
})
export class GarantiieComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
