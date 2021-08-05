import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IConfTableRow, ConfTableRow } from 'app/shared/model/planpassationms/conf-table-row.model';
import { ConfTableRowService } from './conf-table-row.service';
import { ConfTableRowComponent } from './conf-table-row.component';
import { ConfTableRowDetailComponent } from './conf-table-row-detail.component';
import { ConfTableRowUpdateComponent } from './conf-table-row-update.component';

@Injectable({ providedIn: 'root' })
export class ConfTableRowResolve implements Resolve<IConfTableRow> {
  constructor(private service: ConfTableRowService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IConfTableRow> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((confTableRow: HttpResponse<ConfTableRow>) => {
          if (confTableRow.body) {
            return of(confTableRow.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ConfTableRow());
  }
}

export const confTableRowRoute: Routes = [
  {
    path: '',
    component: ConfTableRowComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.planpassationmsConfTableRow.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ConfTableRowDetailComponent,
    resolve: {
      confTableRow: ConfTableRowResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfTableRow.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ConfTableRowUpdateComponent,
    resolve: {
      confTableRow: ConfTableRowResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfTableRow.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ConfTableRowUpdateComponent,
    resolve: {
      confTableRow: ConfTableRowResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfTableRow.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
