import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-delais',
  templateUrl: './delais.component.html',
  styleUrls: ['./delais.component.scss'],
})
export class DelaisComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
