import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-fonctionns',
  templateUrl: './fonctionns.component.html',
  styleUrls: ['./fonctionns.component.scss']
})
export class FonctionnsComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
