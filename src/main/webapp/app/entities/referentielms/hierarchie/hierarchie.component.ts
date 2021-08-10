import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IHierarchie } from 'app/shared/model/referentielms/hierarchie.model';
import { HierarchieService } from './hierarchie.service';
import { HierarchieDeleteDialogComponent } from './hierarchie-delete-dialog.component';

@Component({
  selector: 'jhi-hierarchie',
  templateUrl: './hierarchie.component.html',
})
export class HierarchieComponent implements OnInit, OnDestroy {
  hierarchies?: IHierarchie[];
  eventSubscriber?: Subscription;
  term: any;

  constructor(protected hierarchieService: HierarchieService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.hierarchieService.query().subscribe((res: HttpResponse<IHierarchie[]>) => (this.hierarchies = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInHierarchies();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IHierarchie): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInHierarchies(): void {
    this.eventSubscriber = this.eventManager.subscribe('hierarchieListModification', () => this.loadAll());
  }

  delete(hierarchie: IHierarchie): void {
    const modalRef = this.modalService.open(HierarchieDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.hierarchie = hierarchie;
  }
}
