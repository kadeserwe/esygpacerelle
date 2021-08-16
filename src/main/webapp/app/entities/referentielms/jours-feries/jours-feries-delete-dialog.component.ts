import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IJoursFeries } from 'app/shared/model/referentielms/jours-feries.model';
import { JoursFeriesService } from './jours-feries.service';

@Component({
  templateUrl: './jours-feries-delete-dialog.component.html',
})
export class JoursFeriesDeleteDialogComponent {
  joursFeries?: IJoursFeries;

  constructor(
    protected joursFeriesService: JoursFeriesService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.joursFeriesService.delete(id).subscribe(() => {
      this.eventManager.broadcast('joursFeriesListModification');
      this.activeModal.close();
    });
  }
}
