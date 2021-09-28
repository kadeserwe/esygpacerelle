import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'app/loader/loader.service';

@Component({
  selector: 'jhi-autorite-contractante',
  templateUrl: './autorite-contractante.component.html',
  styleUrls: ['./autorite-contractante.component.scss'],
})
export class AutoriteContractanteComponent implements OnInit {
  rdInvisible: any;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }
}
