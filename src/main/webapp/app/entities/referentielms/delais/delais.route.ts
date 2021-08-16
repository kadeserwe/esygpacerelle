import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDelais, Delais } from 'app/shared/model/referentielms/delais.model';
import { DelaisService } from './delais.service';
import { DelaisComponent } from './delais.component';
import { DelaisDetailComponent } from './delais-detail.component';
import { DelaisUpdateComponent } from './delais-update.component';

@Injectable({ providedIn: 'root' })
export class DelaisResolve implements Resolve<IDelais> {
  constructor(private service: DelaisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDelais> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((delais: HttpResponse<Delais>) => {
          if (delais.body) {
            return of(delais.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Delais());
  }
}

export const delaisRoute: Routes = [
  {
    path: '',
    component: DelaisComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsDelais.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DelaisDetailComponent,
    resolve: {
      delais: DelaisResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsDelais.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DelaisUpdateComponent,
    resolve: {
      delais: DelaisResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsDelais.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DelaisUpdateComponent,
    resolve: {
      delais: DelaisResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsDelais.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
