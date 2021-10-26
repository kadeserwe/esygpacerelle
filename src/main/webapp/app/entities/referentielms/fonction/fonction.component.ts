import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { combineLatest, Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFonction } from 'app/shared/model/referentielms/fonction.model';
import { FonctionService } from './fonction.service';
import { FonctionDeleteDialogComponent } from './fonction-delete-dialog.component';
import { BOUTON_DETAILS, BOUTON_MODIFIER, BOUTON_SUPRIMER, ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';
import { LoaderService } from '../../../loader/loader.service';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { IBanque } from '../../../shared/model/referentielms/banque.model';

@Component({
  selector: 'jhi-fonction',
  templateUrl: './fonction.component.html',
})
export class FonctionComponent implements OnInit, OnDestroy {
  fonctions?: IFonction[];
  eventSubscriber?: Subscription;
  term: any;
  btnSuprimer = BOUTON_SUPRIMER;
  btnModifier = BOUTON_MODIFIER;
  btnDetails = BOUTON_DETAILS;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  ngbPaginationPage = 1;
  predicate!: string;
  ascending!: boolean;

  constructor(
    protected fonctionService: FonctionService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    public loaderService: LoaderService
  ) {}
  loadPage(page?: number, dontNavigate?: boolean): void {
    const pageToLoad: number = page || this.page || 1;

    this.fonctionService
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<IFonction[]>) => this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate),
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
    this.fonctionService.query().subscribe((res: HttpResponse<IFonction[]>) => (this.fonctions = res.body || []));
  }

  ngOnInit(): void {
    this.handleNavigation();
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
    this.eventSubscriber = this.eventManager.subscribe('fonctionListModification', () => this.loadPage());
  }

  delete(fonction: IFonction): void {
    const modalRef = this.modalService.open(FonctionDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.fonction = fonction;
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected onSuccess(data: IFonction[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    if (navigate) {
      this.router.navigate(['/fonctionns/fonction'], {
        queryParams: {
          page: this.page,
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
        },
      });
    }
    this.fonctions = data || [];
    this.ngbPaginationPage = this.page;
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page ?? 1;
  }
}
