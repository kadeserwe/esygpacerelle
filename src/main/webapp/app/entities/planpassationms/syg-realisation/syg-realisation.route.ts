import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ISygRealisation, SygRealisation } from 'app/shared/model/planpassationms/syg-realisation.model';
import { SygRealisationService } from './syg-realisation.service';
import { SygRealisationComponent } from './syg-realisation.component';
import { SygRealisationDetailComponent } from './syg-realisation-detail.component';
import { SygRealisationUpdateComponent } from './syg-realisation-update.component';

@Injectable({ providedIn: 'root' })
export class SygRealisationResolve implements Resolve<ISygRealisation> {
  constructor(private service: SygRealisationService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISygRealisation> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((sygRealisation: HttpResponse<SygRealisation>) => {
          if (sygRealisation.body) {
            return of(sygRealisation.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new SygRealisation());
  }
}

export const sygRealisationRoute: Routes = [
  {
    path: '',
    component: SygRealisationComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.planpassationmsSygRealisation.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: SygRealisationDetailComponent,
    resolve: {
      sygRealisation: SygRealisationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsSygRealisation.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: SygRealisationUpdateComponent,
    resolve: {
      sygRealisation: SygRealisationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsSygRealisation.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: SygRealisationUpdateComponent,
    resolve: {
      sygRealisation: SygRealisationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsSygRealisation.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
