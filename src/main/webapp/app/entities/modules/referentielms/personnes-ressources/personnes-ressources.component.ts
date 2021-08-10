import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-personnes-ressources',
  templateUrl: './personnes-ressources.component.html',
  styleUrls: ['./personnes-ressources.component.scss']
})
export class PersonnesRessourcesComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
