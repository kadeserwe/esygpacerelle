import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { INaturesGarantie, NaturesGarantie } from 'app/shared/model/referentielms/natures-garantie.model';
import { NaturesGarantieService } from './natures-garantie.service';
import { NaturesGarantieComponent } from './natures-garantie.component';
import { NaturesGarantieDetailComponent } from './natures-garantie-detail.component';
import { NaturesGarantieUpdateComponent } from './natures-garantie-update.component';

@Injectable({ providedIn: 'root' })
export class NaturesGarantieResolve implements Resolve<INaturesGarantie> {
  constructor(private service: NaturesGarantieService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<INaturesGarantie> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((naturesGarantie: HttpResponse<NaturesGarantie>) => {
          if (naturesGarantie.body) {
            return of(naturesGarantie.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new NaturesGarantie());
  }
}

export const naturesGarantieRoute: Routes = [
  {
    path: '',
    component: NaturesGarantieComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsNaturesGarantie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: NaturesGarantieDetailComponent,
    resolve: {
      naturesGarantie: NaturesGarantieResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsNaturesGarantie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: NaturesGarantieUpdateComponent,
    resolve: {
      naturesGarantie: NaturesGarantieResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsNaturesGarantie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: NaturesGarantieUpdateComponent,
    resolve: {
      naturesGarantie: NaturesGarantieResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsNaturesGarantie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
