import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';
import { ConfigurationTauxService } from './configuration-taux.service';
import { ConfigurationTauxDeleteDialogComponent } from './configuration-taux-delete-dialog.component';

@Component({
  selector: 'jhi-configuration-taux',
  templateUrl: './configuration-taux.component.html',
})
export class ConfigurationTauxComponent implements OnInit, OnDestroy {
  configurationTauxes?: IConfigurationTaux[];
  eventSubscriber?: Subscription;
  term: any;

  constructor(
    protected configurationTauxService: ConfigurationTauxService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.configurationTauxService
      .query()
      .subscribe((res: HttpResponse<IConfigurationTaux[]>) => (this.configurationTauxes = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInConfigurationTauxes();
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
    this.eventSubscriber = this.eventManager.subscribe('configurationTauxListModification', () => this.loadAll());
  }

  delete(configurationTaux: IConfigurationTaux): void {
    const modalRef = this.modalService.open(ConfigurationTauxDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.configurationTaux = configurationTaux;
  }
}
