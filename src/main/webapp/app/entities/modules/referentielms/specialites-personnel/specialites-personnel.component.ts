import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-specialites-personnel',
  templateUrl: './specialites-personnel.component.html',
  styleUrls: ['./specialites-personnel.component.scss'],
})
export class SpecialitesPersonnelComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
