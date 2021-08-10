import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-hierarchiie',
  templateUrl: './hierarchiie.component.html',
  styleUrls: ['./hierarchiie.component.scss']
})
export class HierarchiieComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
