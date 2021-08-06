import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-banquue',
  templateUrl: './banquue.component.html',
  styleUrls: ['./banquue.component.scss']
})
export class BanquueComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
