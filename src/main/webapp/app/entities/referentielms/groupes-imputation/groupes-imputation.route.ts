import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IGroupesImputation, GroupesImputation } from 'app/shared/model/referentielms/groupes-imputation.model';
import { GroupesImputationService } from './groupes-imputation.service';
import { GroupesImputationComponent } from './groupes-imputation.component';
import { GroupesImputationDetailComponent } from './groupes-imputation-detail.component';
import { GroupesImputationUpdateComponent } from './groupes-imputation-update.component';

@Injectable({ providedIn: 'root' })
export class GroupesImputationResolve implements Resolve<IGroupesImputation> {
  constructor(private service: GroupesImputationService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IGroupesImputation> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((groupesImputation: HttpResponse<GroupesImputation>) => {
          if (groupesImputation.body) {
            return of(groupesImputation.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new GroupesImputation());
  }
}

export const groupesImputationRoute: Routes = [
  {
    path: '',
    component: GroupesImputationComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsGroupesImputation.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: GroupesImputationDetailComponent,
    resolve: {
      groupesImputation: GroupesImputationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsGroupesImputation.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: GroupesImputationUpdateComponent,
    resolve: {
      groupesImputation: GroupesImputationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsGroupesImputation.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: GroupesImputationUpdateComponent,
    resolve: {
      groupesImputation: GroupesImputationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsGroupesImputation.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
