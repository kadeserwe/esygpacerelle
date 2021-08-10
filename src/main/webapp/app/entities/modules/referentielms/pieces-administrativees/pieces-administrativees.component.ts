import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-pieces-administrativees',
  templateUrl: './pieces-administrativees.component.html',
  styleUrls: ['./pieces-administrativees.component.scss']
})
export class PiecesAdministrativeesComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }
  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
