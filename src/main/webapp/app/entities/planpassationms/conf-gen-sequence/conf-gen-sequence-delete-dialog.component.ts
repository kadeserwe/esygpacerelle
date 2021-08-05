import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IConfGenSequence } from 'app/shared/model/planpassationms/conf-gen-sequence.model';
import { ConfGenSequenceService } from './conf-gen-sequence.service';

@Component({
  templateUrl: './conf-gen-sequence-delete-dialog.component.html',
})
export class ConfGenSequenceDeleteDialogComponent {
  confGenSequence?: IConfGenSequence;

  constructor(
    protected confGenSequenceService: ConfGenSequenceService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.confGenSequenceService.delete(id).subscribe(() => {
      this.eventManager.broadcast('confGenSequenceListModification');
      this.activeModal.close();
    });
  }
}
