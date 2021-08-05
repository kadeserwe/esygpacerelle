import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IConfGenSequence } from 'app/shared/model/planpassationms/conf-gen-sequence.model';

@Component({
  selector: 'jhi-conf-gen-sequence-detail',
  templateUrl: './conf-gen-sequence-detail.component.html',
})
export class ConfGenSequenceDetailComponent implements OnInit {
  confGenSequence: IConfGenSequence | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ confGenSequence }) => (this.confGenSequence = confGenSequence));
  }

  previousState(): void {
    window.history.back();
  }
}
