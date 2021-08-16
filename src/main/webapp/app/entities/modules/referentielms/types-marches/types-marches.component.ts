import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-types-marches',
  templateUrl: './types-marches.component.html',
  styleUrls: ['./types-marches.component.scss'],
})
export class TypesMarchesComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
