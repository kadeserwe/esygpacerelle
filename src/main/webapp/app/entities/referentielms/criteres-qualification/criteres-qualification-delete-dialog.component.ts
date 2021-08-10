import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';
import { CriteresQualificationService } from './criteres-qualification.service';

@Component({
  templateUrl: './criteres-qualification-delete-dialog.component.html',
})
export class CriteresQualificationDeleteDialogComponent {
  criteresQualification?: ICriteresQualification;

  constructor(
    protected criteresQualificationService: CriteresQualificationService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.criteresQualificationService.delete(id).subscribe(() => {
      this.eventManager.broadcast('criteresQualificationListModification');
      this.activeModal.close();
    });
  }
}
