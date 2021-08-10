import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ISourcesFinancement } from 'app/shared/model/referentielms/sources-financement.model';
import { SourcesFinancementService } from './sources-financement.service';
import { SourcesFinancementDeleteDialogComponent } from './sources-financement-delete-dialog.component';

@Component({
  selector: 'jhi-sources-financement',
  templateUrl: './sources-financement.component.html',
})
export class SourcesFinancementComponent implements OnInit, OnDestroy {
  sourcesFinancements?: ISourcesFinancement[];
  eventSubscriber?: Subscription;
  term: any;

  constructor(
    protected sourcesFinancementService: SourcesFinancementService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.sourcesFinancementService
      .query()
      .subscribe((res: HttpResponse<ISourcesFinancement[]>) => (this.sourcesFinancements = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInSourcesFinancements();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ISourcesFinancement): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInSourcesFinancements(): void {
    this.eventSubscriber = this.eventManager.subscribe('sourcesFinancementListModification', () => this.loadAll());
  }

  delete(sourcesFinancement: ISourcesFinancement): void {
    const modalRef = this.modalService.open(SourcesFinancementDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.sourcesFinancement = sourcesFinancement;
  }
}
