import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IHierarchie } from 'app/shared/model/referentielms/hierarchie.model';
import { HierarchieService } from './hierarchie.service';

@Component({
  templateUrl: './hierarchie-delete-dialog.component.html',
})
export class HierarchieDeleteDialogComponent {
  hierarchie?: IHierarchie;

  constructor(
    protected hierarchieService: HierarchieService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.hierarchieService.delete(id).subscribe(() => {
      this.eventManager.broadcast('hierarchieListModification');
      this.activeModal.close();
    });
  }
}
