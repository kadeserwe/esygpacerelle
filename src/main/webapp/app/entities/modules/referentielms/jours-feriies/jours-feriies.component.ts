import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-jours-feriies',
  templateUrl: './jours-feriies.component.html',
  styleUrls: ['./jours-feriies.component.scss'],
})
export class JoursFeriiesComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
