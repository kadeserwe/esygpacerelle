import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';
import { SygAutoriteContractanteService } from './syg-autorite-contractante.service';

@Component({
  templateUrl: './syg-autorite-contractante-delete-dialog.component.html',
})
export class SygAutoriteContractanteDeleteDialogComponent {
  sygAutoriteContractante?: ISygAutoriteContractante;

  constructor(
    protected sygAutoriteContractanteService: SygAutoriteContractanteService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.sygAutoriteContractanteService.delete(id).subscribe(() => {
      this.eventManager.broadcast('sygAutoriteContractanteListModification');
      this.activeModal.close();
    });
  }
}
