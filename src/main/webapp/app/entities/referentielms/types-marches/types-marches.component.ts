import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ITypesMarches } from 'app/shared/model/referentielms/types-marches.model';
import { TypesMarchesService } from './types-marches.service';
import { TypesMarchesDeleteDialogComponent } from './types-marches-delete-dialog.component';

@Component({
  selector: 'jhi-types-marches',
  templateUrl: './types-marches.component.html',
})
export class TypesMarchesComponent implements OnInit, OnDestroy {
  typesMarches?: ITypesMarches[];
  eventSubscriber?: Subscription;
  term: any;

  constructor(
    protected typesMarchesService: TypesMarchesService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.typesMarchesService.query().subscribe((res: HttpResponse<ITypesMarches[]>) => (this.typesMarches = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInTypesMarches();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ITypesMarches): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInTypesMarches(): void {
    this.eventSubscriber = this.eventManager.subscribe('typesMarchesListModification', () => this.loadAll());
  }

  delete(typesMarches: ITypesMarches): void {
    const modalRef = this.modalService.open(TypesMarchesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.typesMarches = typesMarches;
  }
}
