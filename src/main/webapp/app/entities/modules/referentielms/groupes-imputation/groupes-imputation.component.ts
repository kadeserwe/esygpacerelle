import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-groupes-imputation',
  templateUrl: './groupes-imputation.component.html',
  styleUrls: ['./groupes-imputation.component.scss'],
})
export class GroupesImputationComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
