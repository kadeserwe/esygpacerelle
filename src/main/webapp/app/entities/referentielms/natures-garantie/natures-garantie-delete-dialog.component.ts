import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { INaturesGarantie } from 'app/shared/model/referentielms/natures-garantie.model';
import { NaturesGarantieService } from './natures-garantie.service';

@Component({
  templateUrl: './natures-garantie-delete-dialog.component.html',
})
export class NaturesGarantieDeleteDialogComponent {
  naturesGarantie?: INaturesGarantie;

  constructor(
    protected naturesGarantieService: NaturesGarantieService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.naturesGarantieService.delete(id).subscribe(() => {
      this.eventManager.broadcast('naturesGarantieListModification');
      this.activeModal.close();
    });
  }
}
