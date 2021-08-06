import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-type-autorite-contractante',
  templateUrl: './type-autorite-contractante.component.html',
  styleUrls: ['./type-autorite-contractante.component.scss']
})
export class TypeAutoriteContractanteComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
