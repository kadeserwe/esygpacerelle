import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-configuration-tauux',
  templateUrl: './configuration-tauux.component.html',
  styleUrls: ['./configuration-tauux.component.scss']
})
export class ConfigurationTauuxComponent implements OnInit {
  rdInvisible: any;
  constructor() { }

  ngOnInit(): void {
  }

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
