import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICategorieFournisseur } from 'app/shared/model/referentielms/categorie-fournisseur.model';
import { CategorieFournisseurService } from './categorie-fournisseur.service';

@Component({
  templateUrl: './categorie-fournisseur-delete-dialog.component.html',
})
export class CategorieFournisseurDeleteDialogComponent {
  categorieFournisseur?: ICategorieFournisseur;

  constructor(
    protected categorieFournisseurService: CategorieFournisseurService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.categorieFournisseurService.delete(id).subscribe(() => {
      this.eventManager.broadcast('categorieFournisseurListModification');
      this.activeModal.close();
    });
  }
}
