import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IConfTableRow } from 'app/shared/model/planpassationms/conf-table-row.model';
import { ConfTableRowService } from './conf-table-row.service';

@Component({
  templateUrl: './conf-table-row-delete-dialog.component.html',
})
export class ConfTableRowDeleteDialogComponent {
  confTableRow?: IConfTableRow;

  constructor(
    protected confTableRowService: ConfTableRowService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.confTableRowService.delete(id).subscribe(() => {
      this.eventManager.broadcast('confTableRowListModification');
      this.activeModal.close();
    });
  }
}
