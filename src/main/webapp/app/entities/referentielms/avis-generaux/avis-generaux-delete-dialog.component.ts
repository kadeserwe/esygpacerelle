import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAvisGeneraux } from 'app/shared/model/referentielms/avis-generaux.model';
import { AvisGenerauxService } from './avis-generaux.service';

@Component({
  templateUrl: './avis-generaux-delete-dialog.component.html',
})
export class AvisGenerauxDeleteDialogComponent {
  avisGeneraux?: IAvisGeneraux;

  constructor(
    protected avisGenerauxService: AvisGenerauxService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.avisGenerauxService.delete(id).subscribe(() => {
      this.eventManager.broadcast('avisGenerauxListModification');
      this.activeModal.close();
    });
  }
}
