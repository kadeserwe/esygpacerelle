import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IJoursFeries, JoursFeries } from 'app/shared/model/referentielms/jours-feries.model';
import { JoursFeriesService } from './jours-feries.service';
import { JoursFeriesComponent } from './jours-feries.component';
import { JoursFeriesDetailComponent } from './jours-feries-detail.component';
import { JoursFeriesUpdateComponent } from './jours-feries-update.component';

@Injectable({ providedIn: 'root' })
export class JoursFeriesResolve implements Resolve<IJoursFeries> {
  constructor(private service: JoursFeriesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IJoursFeries> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((joursFeries: HttpResponse<JoursFeries>) => {
          if (joursFeries.body) {
            return of(joursFeries.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new JoursFeries());
  }
}

export const joursFeriesRoute: Routes = [
  {
    path: '',
    component: JoursFeriesComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsJoursFeries.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: JoursFeriesDetailComponent,
    resolve: {
      joursFeries: JoursFeriesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsJoursFeries.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: JoursFeriesUpdateComponent,
    resolve: {
      joursFeries: JoursFeriesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsJoursFeries.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: JoursFeriesUpdateComponent,
    resolve: {
      joursFeries: JoursFeriesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsJoursFeries.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
