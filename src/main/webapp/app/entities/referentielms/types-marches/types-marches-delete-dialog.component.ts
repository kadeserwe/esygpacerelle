import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITypesMarches } from 'app/shared/model/referentielms/types-marches.model';
import { TypesMarchesService } from './types-marches.service';

@Component({
  templateUrl: './types-marches-delete-dialog.component.html',
})
export class TypesMarchesDeleteDialogComponent {
  typesMarches?: ITypesMarches;

  constructor(
    protected typesMarchesService: TypesMarchesService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.typesMarchesService.delete(id).subscribe(() => {
      this.eventManager.broadcast('typesMarchesListModification');
      this.activeModal.close();
    });
  }
}
