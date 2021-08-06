import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';
import { TypeAutoriteContractanteService } from './type-autorite-contractante.service';

@Component({
  templateUrl: './type-autorite-contractante-delete-dialog.component.html',
})
export class TypeAutoriteContractanteDeleteDialogComponent {
  typeAutoriteContractante?: ITypeAutoriteContractante;

  constructor(
    protected typeAutoriteContractanteService: TypeAutoriteContractanteService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.typeAutoriteContractanteService.delete(id).subscribe(() => {
      this.eventManager.broadcast('typeAutoriteContractanteListModification');
      this.activeModal.close();
    });
  }
}
