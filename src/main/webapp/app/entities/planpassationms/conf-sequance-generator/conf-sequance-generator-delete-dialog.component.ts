import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';
import { ConfSequanceGeneratorService } from './conf-sequance-generator.service';

@Component({
  templateUrl: './conf-sequance-generator-delete-dialog.component.html',
})
export class ConfSequanceGeneratorDeleteDialogComponent {
  confSequanceGenerator?: IConfSequanceGenerator;

  constructor(
    protected confSequanceGeneratorService: ConfSequanceGeneratorService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.confSequanceGeneratorService.delete(id).subscribe(() => {
      this.eventManager.broadcast('confSequanceGeneratorListModification');
      this.activeModal.close();
    });
  }
}
