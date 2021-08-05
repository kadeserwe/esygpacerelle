import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IConfGenSequence, ConfGenSequence } from 'app/shared/model/planpassationms/conf-gen-sequence.model';
import { ConfGenSequenceService } from './conf-gen-sequence.service';
import { ConfGenSequenceComponent } from './conf-gen-sequence.component';
import { ConfGenSequenceDetailComponent } from './conf-gen-sequence-detail.component';
import { ConfGenSequenceUpdateComponent } from './conf-gen-sequence-update.component';

@Injectable({ providedIn: 'root' })
export class ConfGenSequenceResolve implements Resolve<IConfGenSequence> {
  constructor(private service: ConfGenSequenceService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IConfGenSequence> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((confGenSequence: HttpResponse<ConfGenSequence>) => {
          if (confGenSequence.body) {
            return of(confGenSequence.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ConfGenSequence());
  }
}

export const confGenSequenceRoute: Routes = [
  {
    path: '',
    component: ConfGenSequenceComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.planpassationmsConfGenSequence.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ConfGenSequenceDetailComponent,
    resolve: {
      confGenSequence: ConfGenSequenceResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfGenSequence.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ConfGenSequenceUpdateComponent,
    resolve: {
      confGenSequence: ConfGenSequenceResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfGenSequence.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ConfGenSequenceUpdateComponent,
    resolve: {
      confGenSequence: ConfGenSequenceResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfGenSequence.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
