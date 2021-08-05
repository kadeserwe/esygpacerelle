import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPlanPassation } from 'app/shared/model/planpassationms/plan-passation.model';
import { combineLatest, Subscription } from 'rxjs';
import { BOUTON_DETAILS, BOUTON_MODIFIER, BOUTON_SUPRIMER, ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { PlanPassationService } from 'app/entities/planpassationms/plan-passation/plan-passation.service';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { PlanPassationDeleteDialogComponent } from 'app/entities/planpassationms/plan-passation/plan-passation-delete-dialog.component';

@Component({
  selector: 'jhi-mise-a-jour-pp',
  templateUrl: './mise-a-jour-pp.component.html',
  styleUrls: ['./mise-a-jour-pp.component.scss'],
})
export class MiseAJourPpComponent implements OnInit, OnDestroy {
  planPassations?: IPlanPassation[];
  eventSubscriber?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  ngbPaginationPage = 1;
  btnSuprimer = BOUTON_SUPRIMER;
  btnModifier = BOUTON_MODIFIER;
  btnDetails = BOUTON_DETAILS;
  term: any;
  termDate: any;
  fromDate = '';
  toDate = '';
  private dateFormat = 'yyyy-MM-dd';
  selectedId: any;

  constructor(
    protected planPassationService: PlanPassationService,
    protected activatedRoute: ActivatedRoute,
    protected dataUtils: JhiDataUtils,
    protected router: Router,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    private datePipe: DatePipe
  ) {}

  public highlightRow(planPassation: any) {
    this.selectedId = planPassation.id;
    // console.log(this.selectedId)
  }

  private loadData(): void {
    this.planPassationService
      .query1({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
        fromDate: this.fromDate,
        toDate: this.toDate,
      })
      .subscribe(
        (res: HttpResponse<IPlanPassation[]>) => this.onSuccess(res.body, res.headers),
        () => this.onError()
      );
  }

  ngOnInit(): void {
    this.toDate = this.today();
    this.fromDate = this.previousMonth();
    this.handleNavigation();
    this.registerChangeInPlanPassations();
  }

  canLoad(): boolean {
    return this.fromDate !== '' && this.toDate !== '';
  }

  transition(): void {
    if (this.canLoad()) {
      this.router.navigate(['/plan-de-passation/plan-passation'], {
        queryParams: {
          page: this.page,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
          from: this.fromDate,
          to: this.toDate,
        },
      });
    }
  }

  private previousMonth(): string {
    let date = new Date();
    if (date.getMonth() === 0) {
      date = new Date(date.getFullYear() - 1, 11, date.getDate());
    } else {
      date = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
    }
    return this.datePipe.transform(date, this.dateFormat)!;
  }

  private today(): string {
    // Today + 1 day - needed if the current day must be included
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return this.datePipe.transform(date, this.dateFormat)!;
  }

  private handleNavigation(): void {
    combineLatest(this.activatedRoute.data, this.activatedRoute.queryParamMap, (data: Data, params: ParamMap) => {
      const page = params.get('page');
      this.page = page !== null ? +page : 1;
      const sort = (params.get('sort') ?? data['defaultSort']).split(',');
      this.predicate = sort[0];
      this.ascending = sort[1] === 'asc';
      if (params.get('from')) {
        this.fromDate = this.datePipe.transform(params.get('from'), this.dateFormat)!;
      }
      if (params.get('to')) {
        this.toDate = this.datePipe.transform(params.get('to'), this.dateFormat)!;
      }
      this.loadData();
    }).subscribe();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IPlanPassation): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }
  //
  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }
  //
  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }
  //
  registerChangeInPlanPassations(): void {
    this.eventSubscriber = this.eventManager.subscribe('planPassationListModification', () => this.loadData());
  }
  //

  delete(planPassation: IPlanPassation): void {
    const modalRef = this.modalService.open(PlanPassationDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.planPassation = planPassation;
  }

  private sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private onSuccess(data: IPlanPassation[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.planPassations = data || [];
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page ?? 1;
  }
}
