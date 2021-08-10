import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-criteres-qualificatioon',
  templateUrl: './criteres-qualificatioon.component.html',
  styleUrls: ['./criteres-qualificatioon.component.scss']
})
export class CriteresQualificatioonComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
