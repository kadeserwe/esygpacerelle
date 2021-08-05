import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IConfTableDeTransaction } from 'app/shared/model/planpassationms/conf-table-de-transaction.model';

@Component({
  selector: 'jhi-conf-table-de-transaction-detail',
  templateUrl: './conf-table-de-transaction-detail.component.html',
})
export class ConfTableDeTransactionDetailComponent implements OnInit {
  confTableDeTransaction: IConfTableDeTransaction | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ confTableDeTransaction }) => (this.confTableDeTransaction = confTableDeTransaction));
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
