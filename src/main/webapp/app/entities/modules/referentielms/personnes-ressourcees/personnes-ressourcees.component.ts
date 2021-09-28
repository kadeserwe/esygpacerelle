import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-personnes-ressourcees',
  templateUrl: './personnes-ressourcees.component.html',
  styleUrls: ['./personnes-ressourcees.component.scss'],
})
export class PersonnesRessourceesComponent implements OnInit {
  rdInvisible: any;
  constructor() {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
