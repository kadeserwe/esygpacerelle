import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-type-autorite-contractantee',
  templateUrl: './type-autorite-contractantee.component.html',
  styleUrls: ['./type-autorite-contractantee.component.scss'],
})
export class TypeAutoriteContractanteeComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
