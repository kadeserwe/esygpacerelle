import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISygRealisation } from 'app/shared/model/planpassationms/syg-realisation.model';
import { SygRealisationService } from './syg-realisation.service';

@Component({
  templateUrl: './syg-realisation-delete-dialog.component.html',
})
export class SygRealisationDeleteDialogComponent {
  sygRealisation?: ISygRealisation;

  constructor(
    protected sygRealisationService: SygRealisationService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.sygRealisationService.delete(id).subscribe(() => {
      this.eventManager.broadcast('sygRealisationListModification');
      this.activeModal.close();
    });
  }
}
