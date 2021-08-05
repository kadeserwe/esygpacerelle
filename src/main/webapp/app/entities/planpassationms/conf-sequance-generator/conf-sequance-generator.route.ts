import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IConfSequanceGenerator, ConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';
import { ConfSequanceGeneratorService } from './conf-sequance-generator.service';
import { ConfSequanceGeneratorComponent } from './conf-sequance-generator.component';
import { ConfSequanceGeneratorDetailComponent } from './conf-sequance-generator-detail.component';
import { ConfSequanceGeneratorUpdateComponent } from './conf-sequance-generator-update.component';

@Injectable({ providedIn: 'root' })
export class ConfSequanceGeneratorResolve implements Resolve<IConfSequanceGenerator> {
  constructor(private service: ConfSequanceGeneratorService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IConfSequanceGenerator> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((confSequanceGenerator: HttpResponse<ConfSequanceGenerator>) => {
          if (confSequanceGenerator.body) {
            return of(confSequanceGenerator.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ConfSequanceGenerator());
  }
}

export const confSequanceGeneratorRoute: Routes = [
  {
    path: '',
    component: ConfSequanceGeneratorComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.planpassationmsConfSequanceGenerator.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ConfSequanceGeneratorDetailComponent,
    resolve: {
      confSequanceGenerator: ConfSequanceGeneratorResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfSequanceGenerator.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ConfSequanceGeneratorUpdateComponent,
    resolve: {
      confSequanceGenerator: ConfSequanceGeneratorResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfSequanceGenerator.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ConfSequanceGeneratorUpdateComponent,
    resolve: {
      confSequanceGenerator: ConfSequanceGeneratorResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfSequanceGenerator.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
