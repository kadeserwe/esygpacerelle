import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { combineLatest, Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';
import { CriteresQualificationService } from './criteres-qualification.service';
import { CriteresQualificationDeleteDialogComponent } from './criteres-qualification-delete-dialog.component';
import { BOUTON_DETAILS, BOUTON_MODIFIER, BOUTON_SUPRIMER, ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';
import { LoaderService } from '../../../loader/loader.service';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'jhi-criteres-qualification',
  templateUrl: './criteres-qualification.component.html',
})
export class CriteresQualificationComponent implements OnInit, OnDestroy {
  criteresQualifications?: ICriteresQualification[];
  eventSubscriber?: Subscription;
  term: any;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  btnSuprimer = BOUTON_SUPRIMER;
  btnModifier = BOUTON_MODIFIER;
  btnDetails = BOUTON_DETAILS;
  predicate!: string;
  ascending!: boolean;
  ngbPaginationPage = 1;

  constructor(
    protected criteresQualificationService: CriteresQualificationService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    private router: Router,
    protected activatedRoute: ActivatedRoute,
    public loaderService: LoaderService
  ) {}

  loadPage(page?: number, dontNavigate?: boolean): void {
    const pageToLoad: number = page || this.page || 1;

    this.criteresQualificationService
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<ICriteresQualification[]>) => this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate),
        () => this.onError()
      );
  }

  loadAll(): void {
    this.criteresQualificationService
      .query()
      .subscribe((res: HttpResponse<ICriteresQualification[]>) => (this.criteresQualifications = res.body || []));
  }

  ngOnInit(): void {
    this.handleNavigation();
    this.registerChangeInCriteresQualifications();
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
    this.eventSubscriber = this.eventManager.subscribe('criteresQualificationListModification', () => this.loadPage());
  }

  delete(criteresQualification: ICriteresQualification): void {
    const modalRef = this.modalService.open(CriteresQualificationDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.criteresQualification = criteresQualification;
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected onSuccess(data: ICriteresQualification[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    if (navigate) {
      this.router.navigate(['/criteres-qualificatioon/criteres-qualification'], {
        queryParams: {
          page: this.page,
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
        },
      });
    }
    this.criteresQualifications = data || [];
    this.ngbPaginationPage = this.page;
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page ?? 1;
  }
}
