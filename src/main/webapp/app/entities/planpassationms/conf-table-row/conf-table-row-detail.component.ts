import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IConfTableRow } from 'app/shared/model/planpassationms/conf-table-row.model';

@Component({
  selector: 'jhi-conf-table-row-detail',
  templateUrl: './conf-table-row-detail.component.html',
})
export class ConfTableRowDetailComponent implements OnInit {
  confTableRow: IConfTableRow | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ confTableRow }) => (this.confTableRow = confTableRow));
  }

  previousState(): void {
    window.history.back();
  }
}
