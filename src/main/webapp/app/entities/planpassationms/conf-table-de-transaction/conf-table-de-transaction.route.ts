import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IConfTableDeTransaction, ConfTableDeTransaction } from 'app/shared/model/planpassationms/conf-table-de-transaction.model';
import { ConfTableDeTransactionService } from './conf-table-de-transaction.service';
import { ConfTableDeTransactionComponent } from './conf-table-de-transaction.component';
import { ConfTableDeTransactionDetailComponent } from './conf-table-de-transaction-detail.component';

@Injectable({ providedIn: 'root' })
export class ConfTableDeTransactionResolve implements Resolve<IConfTableDeTransaction> {
  constructor(private service: ConfTableDeTransactionService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IConfTableDeTransaction> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((confTableDeTransaction: HttpResponse<ConfTableDeTransaction>) => {
          if (confTableDeTransaction.body) {
            return of(confTableDeTransaction.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ConfTableDeTransaction());
  }
}

export const confTableDeTransactionRoute: Routes = [
  {
    path: '',
    component: ConfTableDeTransactionComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.planpassationmsConfTableDeTransaction.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ConfTableDeTransactionDetailComponent,
    resolve: {
      confTableDeTransaction: ConfTableDeTransactionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.planpassationmsConfTableDeTransaction.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
