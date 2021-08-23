import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFonction } from 'app/shared/model/referentielms/fonction.model';
import { FonctionService } from './fonction.service';
import { FonctionDeleteDialogComponent } from './fonction-delete-dialog.component';
import { BOUTON_DETAILS, BOUTON_MODIFIER, BOUTON_SUPRIMER } from '../../../shared/constants/pagination.constants';

@Component({
  selector: 'jhi-fonction',
  templateUrl: './fonction.component.html',
})
export class FonctionComponent implements OnInit, OnDestroy {
  fonctions?: IFonction[];
  eventSubscriber?: Subscription;
  //Ajout des attributs suivants:
  term: any;
  btnSuprimer = BOUTON_SUPRIMER;
  btnModifier = BOUTON_MODIFIER;
  btnDetails = BOUTON_DETAILS;

  constructor(protected fonctionService: FonctionService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.fonctionService.query().subscribe((res: HttpResponse<IFonction[]>) => (this.fonctions = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInFonctions();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IFonction): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInFonctions(): void {
    this.eventSubscriber = this.eventManager.subscribe('fonctionListModification', () => this.loadAll());
  }

  delete(fonction: IFonction): void {
    const modalRef = this.modalService.open(FonctionDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.fonction = fonction;
  }
}
