import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IConfigurationTaux, ConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';
import { ConfigurationTauxService } from './configuration-taux.service';
import { ConfigurationTauxComponent } from './configuration-taux.component';
import { ConfigurationTauxDetailComponent } from './configuration-taux-detail.component';
import { ConfigurationTauxUpdateComponent } from './configuration-taux-update.component';

@Injectable({ providedIn: 'root' })
export class ConfigurationTauxResolve implements Resolve<IConfigurationTaux> {
  constructor(private service: ConfigurationTauxService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IConfigurationTaux> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((configurationTaux: HttpResponse<ConfigurationTaux>) => {
          if (configurationTaux.body) {
            return of(configurationTaux.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ConfigurationTaux());
  }
}

export const configurationTauxRoute: Routes = [
  {
    path: '',
    component: ConfigurationTauxComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsConfigurationTaux.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ConfigurationTauxDetailComponent,
    resolve: {
      configurationTaux: ConfigurationTauxResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsConfigurationTaux.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ConfigurationTauxUpdateComponent,
    resolve: {
      configurationTaux: ConfigurationTauxResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsConfigurationTaux.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ConfigurationTauxUpdateComponent,
    resolve: {
      configurationTaux: ConfigurationTauxResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsConfigurationTaux.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
