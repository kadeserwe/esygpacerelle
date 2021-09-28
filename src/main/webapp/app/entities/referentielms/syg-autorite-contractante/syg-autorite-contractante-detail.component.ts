import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { ISygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';

@Component({
  selector: 'jhi-syg-autorite-contractante-detail',
  templateUrl: './syg-autorite-contractante-detail.component.html',
})
export class SygAutoriteContractanteDetailComponent implements OnInit {
  sygAutoriteContractante: ISygAutoriteContractante | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sygAutoriteContractante }) => (this.sygAutoriteContractante = sygAutoriteContractante));
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  previousState(): void {
    window.history.back();
  }
}
