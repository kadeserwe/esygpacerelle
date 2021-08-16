import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ISpecialitesPersonnel, SpecialitesPersonnel } from 'app/shared/model/referentielms/specialites-personnel.model';
import { SpecialitesPersonnelService } from './specialites-personnel.service';
import { SpecialitesPersonnelComponent } from './specialites-personnel.component';
import { SpecialitesPersonnelDetailComponent } from './specialites-personnel-detail.component';
import { SpecialitesPersonnelUpdateComponent } from './specialites-personnel-update.component';

@Injectable({ providedIn: 'root' })
export class SpecialitesPersonnelResolve implements Resolve<ISpecialitesPersonnel> {
  constructor(private service: SpecialitesPersonnelService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISpecialitesPersonnel> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((specialitesPersonnel: HttpResponse<SpecialitesPersonnel>) => {
          if (specialitesPersonnel.body) {
            return of(specialitesPersonnel.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new SpecialitesPersonnel());
  }
}

export const specialitesPersonnelRoute: Routes = [
  {
    path: '',
    component: SpecialitesPersonnelComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsSpecialitesPersonnel.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: SpecialitesPersonnelDetailComponent,
    resolve: {
      specialitesPersonnel: SpecialitesPersonnelResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSpecialitesPersonnel.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: SpecialitesPersonnelUpdateComponent,
    resolve: {
      specialitesPersonnel: SpecialitesPersonnelResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSpecialitesPersonnel.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: SpecialitesPersonnelUpdateComponent,
    resolve: {
      specialitesPersonnel: SpecialitesPersonnelResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSpecialitesPersonnel.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
