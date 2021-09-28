import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-departemeent',
  templateUrl: './departemeent.component.html',
  styleUrls: ['./departemeent.component.scss'],
})
export class DepartemeentComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
