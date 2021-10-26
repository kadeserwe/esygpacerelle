import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICriteresQualification, CriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';
import { CriteresQualificationService } from './criteres-qualification.service';
import { CriteresQualificationComponent } from './criteres-qualification.component';
import { CriteresQualificationDetailComponent } from './criteres-qualification-detail.component';
import { CriteresQualificationUpdateComponent } from './criteres-qualification-update.component';

@Injectable({ providedIn: 'root' })
export class CriteresQualificationResolve implements Resolve<ICriteresQualification> {
  constructor(private service: CriteresQualificationService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICriteresQualification> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((criteresQualification: HttpResponse<CriteresQualification>) => {
          if (criteresQualification.body) {
            return of(criteresQualification.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CriteresQualification());
  }
}

export const criteresQualificationRoute: Routes = [
  {
    path: '',
    component: CriteresQualificationComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsCriteresQualification.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CriteresQualificationDetailComponent,
    resolve: {
      criteresQualification: CriteresQualificationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsCriteresQualification.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CriteresQualificationUpdateComponent,
    resolve: {
      criteresQualification: CriteresQualificationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsCriteresQualification.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CriteresQualificationUpdateComponent,
    resolve: {
      criteresQualification: CriteresQualificationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsCriteresQualification.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
