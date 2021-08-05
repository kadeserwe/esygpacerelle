import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-plan-de-passation',
  templateUrl: './plan-de-passation.component.html',
  styleUrls: ['./plan-de-passation.component.scss'],
})
export class PlanDePassationComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
