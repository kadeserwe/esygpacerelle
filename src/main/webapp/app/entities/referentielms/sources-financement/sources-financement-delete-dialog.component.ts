import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISourcesFinancement } from 'app/shared/model/referentielms/sources-financement.model';
import { SourcesFinancementService } from './sources-financement.service';

@Component({
  templateUrl: './sources-financement-delete-dialog.component.html',
})
export class SourcesFinancementDeleteDialogComponent {
  sourcesFinancement?: ISourcesFinancement;

  constructor(
    protected sourcesFinancementService: SourcesFinancementService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.sourcesFinancementService.delete(id).subscribe(() => {
      this.eventManager.broadcast('sourcesFinancementListModification');
      this.activeModal.close();
    });
  }
}
