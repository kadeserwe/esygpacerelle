import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { combineLatest, Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../../../loader/loader.service';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { IConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';
import { ConfigurationTauxService } from './configuration-taux.service';
import { ConfigurationTauxDeleteDialogComponent } from './configuration-taux-delete-dialog.component';
import { BOUTON_DETAILS, BOUTON_MODIFIER, BOUTON_SUPRIMER, ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';

@Component({
  selector: 'jhi-configuration-taux',
  templateUrl: './configuration-taux.component.html',
})
export class ConfigurationTauxComponent implements OnInit, OnDestroy {
  configurationTauxes?: IConfigurationTaux[];
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
    protected configurationTauxService: ConfigurationTauxService,
    protected eventManager: JhiEventManager,
    protected activatedRoute: ActivatedRoute,
    protected modalService: NgbModal,
    protected router: Router,
    public loaderService: LoaderService
  ) {}

  loadPage(page?: number, dontNavigate?: boolean): void {
    const pageToLoad: number = page || this.page || 1;

    this.configurationTauxService
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<IConfigurationTaux[]>) => this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate),
        () => this.onError()
      );
  }

  loadAll(): void {
    this.configurationTauxService
      .query()
      .subscribe((res: HttpResponse<IConfigurationTaux[]>) => (this.configurationTauxes = res.body || []));
  }

  ngOnInit(): void {
    this.handleNavigation();
    this.registerChangeInConfigurationTauxes();
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

  trackId(index: number, item: IConfigurationTaux): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInConfigurationTauxes(): void {
    this.eventSubscriber = this.eventManager.subscribe('configurationTauxListModification', () => this.loadPage());
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected onSuccess(data: IConfigurationTaux[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    if (navigate) {
      this.router.navigate(['/configuration-tauux/configuration-taux'], {
        queryParams: {
          page: this.page,
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
        },
      });
    }
    this.configurationTauxes = data || [];
    this.ngbPaginationPage = this.page;
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page ?? 1;
  }

  delete(configurationTaux: IConfigurationTaux): void {
    const modalRef = this.modalService.open(ConfigurationTauxDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.configurationTaux = configurationTaux;
  }
}
