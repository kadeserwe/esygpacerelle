import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICategorieFournisseur, CategorieFournisseur } from 'app/shared/model/referentielms/categorie-fournisseur.model';
import { CategorieFournisseurService } from './categorie-fournisseur.service';
import { CategorieFournisseurComponent } from './categorie-fournisseur.component';
import { CategorieFournisseurDetailComponent } from './categorie-fournisseur-detail.component';
import { CategorieFournisseurUpdateComponent } from './categorie-fournisseur-update.component';

@Injectable({ providedIn: 'root' })
export class CategorieFournisseurResolve implements Resolve<ICategorieFournisseur> {
  constructor(private service: CategorieFournisseurService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICategorieFournisseur> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((categorieFournisseur: HttpResponse<CategorieFournisseur>) => {
          if (categorieFournisseur.body) {
            return of(categorieFournisseur.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CategorieFournisseur());
  }
}

export const categorieFournisseurRoute: Routes = [
  {
    path: '',
    component: CategorieFournisseurComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.referentielmsCategorieFournisseur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CategorieFournisseurDetailComponent,
    resolve: {
      categorieFournisseur: CategorieFournisseurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsCategorieFournisseur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CategorieFournisseurUpdateComponent,
    resolve: {
      categorieFournisseur: CategorieFournisseurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsCategorieFournisseur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CategorieFournisseurUpdateComponent,
    resolve: {
      categorieFournisseur: CategorieFournisseurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsCategorieFournisseur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
