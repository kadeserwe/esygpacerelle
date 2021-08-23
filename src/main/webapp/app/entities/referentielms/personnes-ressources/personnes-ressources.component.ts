import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPersonnesRessources } from 'app/shared/model/referentielms/personnes-ressources.model';
import { PersonnesRessourcesService } from './personnes-ressources.service';
import { PersonnesRessourcesDeleteDialogComponent } from './personnes-ressources-delete-dialog.component';
import { BOUTON_DETAILS, BOUTON_MODIFIER, BOUTON_SUPRIMER } from '../../../shared/constants/pagination.constants';

@Component({
  selector: 'jhi-personnes-ressources',
  templateUrl: './personnes-ressources.component.html',
})
export class PersonnesRessourcesComponent implements OnInit, OnDestroy {
  personnesRessources?: IPersonnesRessources[];
  eventSubscriber?: Subscription;
  term: any;
  btnSuprimer = BOUTON_SUPRIMER;
  btnModifier = BOUTON_MODIFIER;
  btnDetails = BOUTON_DETAILS;

  constructor(
    protected personnesRessourcesService: PersonnesRessourcesService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.personnesRessourcesService
      .query()
      .subscribe((res: HttpResponse<IPersonnesRessources[]>) => (this.personnesRessources = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInPersonnesRessources();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IPersonnesRessources): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInPersonnesRessources(): void {
    this.eventSubscriber = this.eventManager.subscribe('personnesRessourcesListModification', () => this.loadAll());
  }

  delete(personnesRessources: IPersonnesRessources): void {
    const modalRef = this.modalService.open(PersonnesRessourcesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.personnesRessources = personnesRessources;
  }
}
