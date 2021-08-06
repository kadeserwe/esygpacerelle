import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IModeSelection } from 'app/shared/model/referentielms/mode-selection.model';
import { ModeSelectionService } from './mode-selection.service';

@Component({
  templateUrl: './mode-selection-delete-dialog.component.html',
})
export class ModeSelectionDeleteDialogComponent {
  modeSelection?: IModeSelection;

  constructor(
    protected modeSelectionService: ModeSelectionService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.modeSelectionService.delete(id).subscribe(() => {
      this.eventManager.broadcast('modeSelectionListModification');
      this.activeModal.close();
    });
  }
}
