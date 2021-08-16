import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDelais } from 'app/shared/model/referentielms/delais.model';
import { DelaisService } from './delais.service';

@Component({
  templateUrl: './delais-delete-dialog.component.html',
})
export class DelaisDeleteDialogComponent {
  delais?: IDelais;

  constructor(protected delaisService: DelaisService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.delaisService.delete(id).subscribe(() => {
      this.eventManager.broadcast('delaisListModification');
      this.activeModal.close();
    });
  }
}
