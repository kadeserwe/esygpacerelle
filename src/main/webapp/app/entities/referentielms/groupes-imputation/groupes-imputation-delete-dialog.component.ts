import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IGroupesImputation } from 'app/shared/model/referentielms/groupes-imputation.model';
import { GroupesImputationService } from './groupes-imputation.service';

@Component({
  templateUrl: './groupes-imputation-delete-dialog.component.html',
})
export class GroupesImputationDeleteDialogComponent {
  groupesImputation?: IGroupesImputation;

  constructor(
    protected groupesImputationService: GroupesImputationService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.groupesImputationService.delete(id).subscribe(() => {
      this.eventManager.broadcast('groupesImputationListModification');
      this.activeModal.close();
    });
  }
}
