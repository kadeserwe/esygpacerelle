import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPersonnesRessources, PersonnesRessources } from 'app/shared/model/referentielms/personnes-ressources.model';
import { PersonnesRessourcesService } from './personnes-ressources.service';
import { PersonnesRessourcesComponent } from './personnes-ressources.component';
import { PersonnesRessourcesDetailComponent } from './personnes-ressources-detail.component';
import { PersonnesRessourcesUpdateComponent } from './personnes-ressources-update.component';

@Injectable({ providedIn: 'root' })
export class PersonnesRessourcesResolve implements Resolve<IPersonnesRessources> {
  constructor(private service: PersonnesRessourcesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPersonnesRessources> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((personnesRessources: HttpResponse<PersonnesRessources>) => {
          if (personnesRessources.body) {
            return of(personnesRessources.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new PersonnesRessources());
  }
}

export const personnesRessourcesRoute: Routes = [
  {
    path: '',
    component: PersonnesRessourcesComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsPersonnesRessources.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PersonnesRessourcesDetailComponent,
    resolve: {
      personnesRessources: PersonnesRessourcesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsPersonnesRessources.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PersonnesRessourcesUpdateComponent,
    resolve: {
      personnesRessources: PersonnesRessourcesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsPersonnesRessources.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PersonnesRessourcesUpdateComponent,
    resolve: {
      personnesRessources: PersonnesRessourcesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.referentielmsPersonnesRessources.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
