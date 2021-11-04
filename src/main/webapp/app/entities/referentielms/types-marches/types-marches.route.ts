import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ITypesMarches, TypesMarches } from 'app/shared/model/referentielms/types-marches.model';
import { TypesMarchesService } from './types-marches.service';
import { TypesMarchesComponent } from './types-marches.component';
import { TypesMarchesDetailComponent } from './types-marches-detail.component';
import { TypesMarchesUpdateComponent } from './types-marches-update.component';

@Injectable({ providedIn: 'root' })
export class TypesMarchesResolve implements Resolve<ITypesMarches> {
  constructor(private service: TypesMarchesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITypesMarches> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((typesMarches: HttpResponse<TypesMarches>) => {
          if (typesMarches.body) {
            return of(typesMarches.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new TypesMarches());
  }
}

export const typesMarchesRoute: Routes = [
  {
    path: '',
    component: TypesMarchesComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsTypesMarches.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TypesMarchesDetailComponent,
    resolve: {
      typesMarches: TypesMarchesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsTypesMarches.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TypesMarchesUpdateComponent,
    resolve: {
      typesMarches: TypesMarchesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsTypesMarches.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TypesMarchesUpdateComponent,
    resolve: {
      typesMarches: TypesMarchesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsTypesMarches.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
