import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { combineLatest, Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';
import { PiecesAdministrativesService } from './pieces-administratives.service';
import { PiecesAdministrativesDeleteDialogComponent } from './pieces-administratives-delete-dialog.component';
import { BOUTON_DETAILS, BOUTON_MODIFIER, BOUTON_SUPRIMER, ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';
import { LoaderService } from '../../../loader/loader.service';
import { INaturesGarantie } from '../../../shared/model/referentielms/natures-garantie.model';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'jhi-pieces-administratives',
  templateUrl: './pieces-administratives.component.html',
})
export class PiecesAdministrativesComponent implements OnInit, OnDestroy {
  piecesAdministratives?: IPiecesAdministratives[];
  eventSubscriber?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  term: any;
  btnSuprimer = BOUTON_SUPRIMER;
  btnModifier = BOUTON_MODIFIER;
  btnDetails = BOUTON_DETAILS;
  predicate!: string;
  ascending!: boolean;
  ngbPaginationPage = 1;

  constructor(
    protected piecesAdministrativesService: PiecesAdministrativesService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    public loaderService: LoaderService
  ) {}

  loadAll(): void {
    this.piecesAdministrativesService
      .query()
      .subscribe((res: HttpResponse<IPiecesAdministratives[]>) => (this.piecesAdministratives = res.body || []));
  }

  loadPage(page?: number, dontNavigate?: boolean): void {
    const pageToLoad: number = page || this.page || 1;

    this.piecesAdministrativesService
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<IPiecesAdministratives[]>) => this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate),
        () => this.onError()
      );
  }

  protected handleNavigation(): void {
    combineLatest(this.activatedRoute.data, this.activatedRoute.queryParamMap, (data: Data, params: ParamMap) => {
      const page = params.get('page');
      const pageNumber = page !== null ? +page : 1;
      const sort = (params.get('sort') ?? data['defaultSort']).split(',');
      const predicate = sort[0];
      const ascending = sort[1] === 'asc';
      if (pageNumber !== this.page || predicate !== this.predicate || ascending !== this.ascending) {
        this.predicate = predicate;
        this.ascending = ascending;
        this.loadPage(pageNumber, true);
      }
    }).subscribe();
  }

  ngOnInit(): void {
    this.handleNavigation();
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
    this.eventSubscriber = this.eventManager.subscribe('piecesAdministrativesListModification', () => this.loadPage());
  }

  protected onSuccess(data: IPiecesAdministratives[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    if (navigate) {
      this.router.navigate(['/pieces-administrativees/pieces-administratives'], {
        queryParams: {
          page: this.page,
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
        },
      });
    }
    this.piecesAdministratives = data || [];
    this.ngbPaginationPage = this.page;
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page ?? 1;
  }

  delete(piecesAdministratives: IPiecesAdministratives): void {
    const modalRef = this.modalService.open(PiecesAdministrativesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.piecesAdministratives = piecesAdministratives;
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }
}
