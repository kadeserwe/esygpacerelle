import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-jours-feries',
  templateUrl: './jours-feries.component.html',
  styleUrls: ['./jours-feries.component.scss'],
})
export class JoursFeriesComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
