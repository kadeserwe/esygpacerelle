import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-groupes-imputatioon',
  templateUrl: './groupes-imputatioon.component.html',
  styleUrls: ['./groupes-imputatioon.component.scss'],
})
export class GroupesImputatioonComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
