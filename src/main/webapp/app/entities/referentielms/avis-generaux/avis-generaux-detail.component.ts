import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IAvisGeneraux } from 'app/shared/model/referentielms/avis-generaux.model';

@Component({
  selector: 'jhi-avis-generaux-detail',
  templateUrl: './avis-generaux-detail.component.html',
})
export class AvisGenerauxDetailComponent implements OnInit {
  avisGeneraux: IAvisGeneraux | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ avisGeneraux }) => (this.avisGeneraux = avisGeneraux));
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
