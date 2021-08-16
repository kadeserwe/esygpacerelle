import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISpecialitesPersonnel } from 'app/shared/model/referentielms/specialites-personnel.model';
import { SpecialitesPersonnelService } from './specialites-personnel.service';

@Component({
  templateUrl: './specialites-personnel-delete-dialog.component.html',
})
export class SpecialitesPersonnelDeleteDialogComponent {
  specialitesPersonnel?: ISpecialitesPersonnel;

  constructor(
    protected specialitesPersonnelService: SpecialitesPersonnelService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.specialitesPersonnelService.delete(id).subscribe(() => {
      this.eventManager.broadcast('specialitesPersonnelListModification');
      this.activeModal.close();
    });
  }
}
