import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';
import { CriteresQualificationService } from './criteres-qualification.service';
import { CriteresQualificationDeleteDialogComponent } from './criteres-qualification-delete-dialog.component';

@Component({
  selector: 'jhi-criteres-qualification',
  templateUrl: './criteres-qualification.component.html',
})
export class CriteresQualificationComponent implements OnInit, OnDestroy {
  criteresQualifications?: ICriteresQualification[];
  eventSubscriber?: Subscription;
  term: any;

  constructor(
    protected criteresQualificationService: CriteresQualificationService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.criteresQualificationService
      .query()
      .subscribe((res: HttpResponse<ICriteresQualification[]>) => (this.criteresQualifications = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInCriteresQualifications();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ICriteresQualification): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInCriteresQualifications(): void {
    this.eventSubscriber = this.eventManager.subscribe('criteresQualificationListModification', () => this.loadAll());
  }

  delete(criteresQualification: ICriteresQualification): void {
    const modalRef = this.modalService.open(CriteresQualificationDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.criteresQualification = criteresQualification;
  }
}
