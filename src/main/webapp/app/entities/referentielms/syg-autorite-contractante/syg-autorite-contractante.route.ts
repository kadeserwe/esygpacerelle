import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ISygAutoriteContractante, SygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';
import { SygAutoriteContractanteService } from './syg-autorite-contractante.service';
import { SygAutoriteContractanteComponent } from './syg-autorite-contractante.component';
import { SygAutoriteContractanteDetailComponent } from './syg-autorite-contractante-detail.component';
import { SygAutoriteContractanteUpdateComponent } from './syg-autorite-contractante-update.component';

@Injectable({ providedIn: 'root' })
export class SygAutoriteContractanteResolve implements Resolve<ISygAutoriteContractante> {
  constructor(private service: SygAutoriteContractanteService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISygAutoriteContractante> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((sygAutoriteContractante: HttpResponse<SygAutoriteContractante>) => {
          if (sygAutoriteContractante.body) {
            return of(sygAutoriteContractante.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new SygAutoriteContractante());
  }
}

export const sygAutoriteContractanteRoute: Routes = [
  {
    path: '',
    component: SygAutoriteContractanteComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsSygAutoriteContractante.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: SygAutoriteContractanteDetailComponent,
    resolve: {
      sygAutoriteContractante: SygAutoriteContractanteResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSygAutoriteContractante.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: SygAutoriteContractanteUpdateComponent,
    resolve: {
      sygAutoriteContractante: SygAutoriteContractanteResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSygAutoriteContractante.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: SygAutoriteContractanteUpdateComponent,
    resolve: {
      sygAutoriteContractante: SygAutoriteContractanteResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsSygAutoriteContractante.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
