import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISygRealisation } from 'app/shared/model/planpassationms/syg-realisation.model';

@Component({
  selector: 'jhi-syg-realisation-detail',
  templateUrl: './syg-realisation-detail.component.html',
})
export class SygRealisationDetailComponent implements OnInit {
  sygRealisation: ISygRealisation | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sygRealisation }) => (this.sygRealisation = sygRealisation));
  }

  previousState(): void {
    window.history.back();
  }
}
