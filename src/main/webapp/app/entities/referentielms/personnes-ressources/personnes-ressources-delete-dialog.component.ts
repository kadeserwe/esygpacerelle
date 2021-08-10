import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPersonnesRessources } from 'app/shared/model/referentielms/personnes-ressources.model';
import { PersonnesRessourcesService } from './personnes-ressources.service';

@Component({
  templateUrl: './personnes-ressources-delete-dialog.component.html',
})
export class PersonnesRessourcesDeleteDialogComponent {
  personnesRessources?: IPersonnesRessources;

  constructor(
    protected personnesRessourcesService: PersonnesRessourcesService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.personnesRessourcesService.delete(id).subscribe(() => {
      this.eventManager.broadcast('personnesRessourcesListModification');
      this.activeModal.close();
    });
  }
}
