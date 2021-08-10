import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';
import { PiecesAdministrativesService } from './pieces-administratives.service';

@Component({
  templateUrl: './pieces-administratives-delete-dialog.component.html',
})
export class PiecesAdministrativesDeleteDialogComponent {
  piecesAdministratives?: IPiecesAdministratives;

  constructor(
    protected piecesAdministrativesService: PiecesAdministrativesService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.piecesAdministrativesService.delete(id).subscribe(() => {
      this.eventManager.broadcast('piecesAdministrativesListModification');
      this.activeModal.close();
    });
  }
}
