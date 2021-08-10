import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ISourcesFinancement, SourcesFinancement } from 'app/shared/model/referentielms/sources-financement.model';
import { SourcesFinancementService } from './sources-financement.service';
import { SourcesFinancementComponent } from './sources-financement.component';
import { SourcesFinancementDetailComponent } from './sources-financement-detail.component';
import { SourcesFinancementUpdateComponent } from './sources-financement-update.component';

@Injectable({ providedIn: 'root' })
export class SourcesFinancementResolve implements Resolve<ISourcesFinancement> {
  constructor(private service: SourcesFinancementService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISourcesFinancement> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((sourcesFinancement: HttpResponse<SourcesFinancement>) => {
          if (sourcesFinancement.body) {
            return of(sourcesFinancement.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new SourcesFinancement());
  }
}

export const sourcesFinancementRoute: Routes = [
  {
    path: '',
    component: SourcesFinancementComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSourcesFinancement.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: SourcesFinancementDetailComponent,
    resolve: {
      sourcesFinancement: SourcesFinancementResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSourcesFinancement.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: SourcesFinancementUpdateComponent,
    resolve: {
      sourcesFinancement: SourcesFinancementResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSourcesFinancement.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: SourcesFinancementUpdateComponent,
    resolve: {
      sourcesFinancement: SourcesFinancementResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSourcesFinancement.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
