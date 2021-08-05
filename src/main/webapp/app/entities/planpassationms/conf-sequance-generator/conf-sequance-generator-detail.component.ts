import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';

@Component({
  selector: 'jhi-conf-sequance-generator-detail',
  templateUrl: './conf-sequance-generator-detail.component.html',
})
export class ConfSequanceGeneratorDetailComponent implements OnInit {
  confSequanceGenerator: IConfSequanceGenerator | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ confSequanceGenerator }) => (this.confSequanceGenerator = confSequanceGenerator));
  }

  previousState(): void {
    window.history.back();
  }
}
