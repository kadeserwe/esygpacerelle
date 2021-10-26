import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPiecesAdministratives, PiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';
import { PiecesAdministrativesService } from './pieces-administratives.service';
import { PiecesAdministrativesComponent } from './pieces-administratives.component';
import { PiecesAdministrativesDetailComponent } from './pieces-administratives-detail.component';
import { PiecesAdministrativesUpdateComponent } from './pieces-administratives-update.component';

@Injectable({ providedIn: 'root' })
export class PiecesAdministrativesResolve implements Resolve<IPiecesAdministratives> {
  constructor(private service: PiecesAdministrativesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPiecesAdministratives> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((piecesAdministratives: HttpResponse<PiecesAdministratives>) => {
          if (piecesAdministratives.body) {
            return of(piecesAdministratives.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new PiecesAdministratives());
  }
}

export const piecesAdministrativesRoute: Routes = [
  {
    path: '',
    component: PiecesAdministrativesComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsPiecesAdministratives.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PiecesAdministrativesDetailComponent,
    resolve: {
      piecesAdministratives: PiecesAdministrativesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsPiecesAdministratives.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PiecesAdministrativesUpdateComponent,
    resolve: {
      piecesAdministratives: PiecesAdministrativesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsPiecesAdministratives.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PiecesAdministrativesUpdateComponent,
    resolve: {
      piecesAdministratives: PiecesAdministrativesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsPiecesAdministratives.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
