import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IHierarchie, Hierarchie } from 'app/shared/model/referentielms/hierarchie.model';
import { HierarchieService } from './hierarchie.service';
import { HierarchieComponent } from './hierarchie.component';
import { HierarchieDetailComponent } from './hierarchie-detail.component';
import { HierarchieUpdateComponent } from './hierarchie-update.component';

@Injectable({ providedIn: 'root' })
export class HierarchieResolve implements Resolve<IHierarchie> {
  constructor(private service: HierarchieService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IHierarchie> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((hierarchie: HttpResponse<Hierarchie>) => {
          if (hierarchie.body) {
            return of(hierarchie.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Hierarchie());
  }
}

export const hierarchieRoute: Routes = [
  {
    path: '',
    component: HierarchieComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsHierarchie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: HierarchieDetailComponent,
    resolve: {
      hierarchie: HierarchieResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsHierarchie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: HierarchieUpdateComponent,
    resolve: {
      hierarchie: HierarchieResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsHierarchie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: HierarchieUpdateComponent,
    resolve: {
      hierarchie: HierarchieResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsHierarchie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
