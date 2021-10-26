import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { combineLatest, Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ISourcesFinancement } from 'app/shared/model/referentielms/sources-financement.model';
import { SourcesFinancementService } from './sources-financement.service';
import { SourcesFinancementDeleteDialogComponent } from './sources-financement-delete-dialog.component';
import { BOUTON_DETAILS, BOUTON_MODIFIER, BOUTON_SUPRIMER, ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';
import { LoaderService } from '../../../loader/loader.service';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { IBanque } from '../../../shared/model/referentielms/banque.model';

@Component({
  selector: 'jhi-sources-financement',
  templateUrl: './sources-financement.component.html',
})
export class SourcesFinancementComponent implements OnInit, OnDestroy {
  sourcesFinancements?: ISourcesFinancement[];
  eventSubscriber?: Subscription;
  term: any;
  btnSuprimer = BOUTON_SUPRIMER;
  btnModifier = BOUTON_MODIFIER;
  btnDetails = BOUTON_DETAILS;

  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  ngbPaginationPage = 1;

  constructor(
    protected sourcesFinancementService: SourcesFinancementService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected activatedRoute: ActivatedRoute,
    public loaderService: LoaderService,
    protected router: Router
  ) {}

  loadPage(page?: number, dontNavigate?: boolean): void {
    const pageToLoad: number = page || this.page || 1;

    this.sourcesFinancementService
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<ISourcesFinancement[]>) => this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate),
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

  loadAll(): void {
    this.sourcesFinancementService
      .query()
      .subscribe((res: HttpResponse<ISourcesFinancement[]>) => (this.sourcesFinancements = res.body || []));
  }

  ngOnInit(): void {
    this.handleNavigation();
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
    this.eventSubscriber = this.eventManager.subscribe('sourcesFinancementListModification', () => this.loadPage());
  }

  delete(sourcesFinancement: ISourcesFinancement): void {
    const modalRef = this.modalService.open(SourcesFinancementDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.sourcesFinancement = sourcesFinancement;
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected onSuccess(data: ISourcesFinancement[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    if (navigate) {
      this.router.navigate(['/sources-financemennt/sources-financement'], {
        queryParams: {
          page: this.page,
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
        },
      });
    }
    this.sourcesFinancements = data || [];
    this.ngbPaginationPage = this.page;
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page ?? 1;
  }
}
