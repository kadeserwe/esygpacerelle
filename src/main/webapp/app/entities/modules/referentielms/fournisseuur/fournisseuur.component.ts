import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-fournisseuur',
  templateUrl: './fournisseuur.component.html',
  styleUrls: ['./fournisseuur.component.scss'],
})
export class FournisseuurComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
