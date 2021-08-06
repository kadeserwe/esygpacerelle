import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ITypeAutoriteContractante, TypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';
import { TypeAutoriteContractanteService } from './type-autorite-contractante.service';
import { TypeAutoriteContractanteComponent } from './type-autorite-contractante.component';
import { TypeAutoriteContractanteDetailComponent } from './type-autorite-contractante-detail.component';
import { TypeAutoriteContractanteUpdateComponent } from './type-autorite-contractante-update.component';

@Injectable({ providedIn: 'root' })
export class TypeAutoriteContractanteResolve implements Resolve<ITypeAutoriteContractante> {
  constructor(private service: TypeAutoriteContractanteService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITypeAutoriteContractante> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((typeAutoriteContractante: HttpResponse<TypeAutoriteContractante>) => {
          if (typeAutoriteContractante.body) {
            return of(typeAutoriteContractante.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new TypeAutoriteContractante());
  }
}

export const typeAutoriteContractanteRoute: Routes = [
  {
    path: '',
    component: TypeAutoriteContractanteComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsTypeAutoriteContractante.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TypeAutoriteContractanteDetailComponent,
    resolve: {
      typeAutoriteContractante: TypeAutoriteContractanteResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsTypeAutoriteContractante.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TypeAutoriteContractanteUpdateComponent,
    resolve: {
      typeAutoriteContractante: TypeAutoriteContractanteResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsTypeAutoriteContractante.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TypeAutoriteContractanteUpdateComponent,
    resolve: {
      typeAutoriteContractante: TypeAutoriteContractanteResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsTypeAutoriteContractante.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
