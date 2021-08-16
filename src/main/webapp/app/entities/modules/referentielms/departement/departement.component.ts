import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss'],
})
export class DepartementComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
