import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';
import { PiecesAdministrativesService } from './pieces-administratives.service';
import { PiecesAdministrativesDeleteDialogComponent } from './pieces-administratives-delete-dialog.component';

@Component({
  selector: 'jhi-pieces-administratives',
  templateUrl: './pieces-administratives.component.html',
})
export class PiecesAdministrativesComponent implements OnInit, OnDestroy {
  piecesAdministratives?: IPiecesAdministratives[];
  eventSubscriber?: Subscription;
  term:any;

  constructor(
    protected piecesAdministrativesService: PiecesAdministrativesService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.piecesAdministrativesService
      .query()
      .subscribe((res: HttpResponse<IPiecesAdministratives[]>) => (this.piecesAdministratives = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInPiecesAdministratives();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IPiecesAdministratives): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInPiecesAdministratives(): void {
    this.eventSubscriber = this.eventManager.subscribe('piecesAdministrativesListModification', () => this.loadAll());
  }

  delete(piecesAdministratives: IPiecesAdministratives): void {
    const modalRef = this.modalService.open(PiecesAdministrativesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.piecesAdministratives = piecesAdministratives;
  }
}
