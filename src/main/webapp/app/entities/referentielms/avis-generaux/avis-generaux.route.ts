import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IAvisGeneraux, AvisGeneraux } from 'app/shared/model/referentielms/avis-generaux.model';
import { AvisGenerauxService } from './avis-generaux.service';
import { AvisGenerauxComponent } from './avis-generaux.component';
import { AvisGenerauxDetailComponent } from './avis-generaux-detail.component';
import { AvisGenerauxUpdateComponent } from './avis-generaux-update.component';

@Injectable({ providedIn: 'root' })
export class AvisGenerauxResolve implements Resolve<IAvisGeneraux> {
  constructor(private service: AvisGenerauxService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IAvisGeneraux> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((avisGeneraux: HttpResponse<AvisGeneraux>) => {
          if (avisGeneraux.body) {
            return of(avisGeneraux.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new AvisGeneraux());
  }
}

export const avisGenerauxRoute: Routes = [
  {
    path: '',
    component: AvisGenerauxComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsAvisGeneraux.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: AvisGenerauxDetailComponent,
    resolve: {
      avisGeneraux: AvisGenerauxResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsAvisGeneraux.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: AvisGenerauxUpdateComponent,
    resolve: {
      avisGeneraux: AvisGenerauxResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsAvisGeneraux.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: AvisGenerauxUpdateComponent,
    resolve: {
      avisGeneraux: AvisGenerauxResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsAvisGeneraux.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
