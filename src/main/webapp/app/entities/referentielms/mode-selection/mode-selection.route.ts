import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IModeSelection, ModeSelection } from 'app/shared/model/referentielms/mode-selection.model';
import { ModeSelectionService } from './mode-selection.service';
import { ModeSelectionComponent } from './mode-selection.component';
import { ModeSelectionDetailComponent } from './mode-selection-detail.component';
import { ModeSelectionUpdateComponent } from './mode-selection-update.component';

@Injectable({ providedIn: 'root' })
export class ModeSelectionResolve implements Resolve<IModeSelection> {
  constructor(private service: ModeSelectionService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IModeSelection> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((modeSelection: HttpResponse<ModeSelection>) => {
          if (modeSelection.body) {
            return of(modeSelection.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ModeSelection());
  }
}

export const modeSelectionRoute: Routes = [
  {
    path: '',
    component: ModeSelectionComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsModeSelection.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ModeSelectionDetailComponent,
    resolve: {
      modeSelection: ModeSelectionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsModeSelection.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ModeSelectionUpdateComponent,
    resolve: {
      modeSelection: ModeSelectionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsModeSelection.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ModeSelectionUpdateComponent,
    resolve: {
      modeSelection: ModeSelectionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsModeSelection.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
