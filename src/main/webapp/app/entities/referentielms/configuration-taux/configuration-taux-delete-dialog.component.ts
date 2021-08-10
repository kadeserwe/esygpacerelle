import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';
import { ConfigurationTauxService } from './configuration-taux.service';

@Component({
  templateUrl: './configuration-taux-delete-dialog.component.html',
})
export class ConfigurationTauxDeleteDialogComponent {
  configurationTaux?: IConfigurationTaux;

  constructor(
    protected configurationTauxService: ConfigurationTauxService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.configurationTauxService.delete(id).subscribe(() => {
      this.eventManager.broadcast('configurationTauxListModification');
      this.activeModal.close();
    });
  }
}
