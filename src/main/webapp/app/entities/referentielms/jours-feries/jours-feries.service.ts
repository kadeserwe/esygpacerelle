import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IJoursFeries } from 'app/shared/model/referentielms/jours-feries.model';

type EntityResponseType = HttpResponse<IJoursFeries>;
type EntityArrayResponseType = HttpResponse<IJoursFeries[]>;

@Injectable({ providedIn: 'root' })
export class JoursFeriesService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/jours-feries';

  constructor(protected http: HttpClient) {}

  create(joursFeries: IJoursFeries): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(joursFeries);
    return this.http
      .post<IJoursFeries>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(joursFeries: IJoursFeries): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(joursFeries);
    return this.http
      .put<IJoursFeries>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IJoursFeries>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IJoursFeries[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(joursFeries: IJoursFeries): IJoursFeries {
    const copy: IJoursFeries = Object.assign({}, joursFeries, {
      date: joursFeries.date && joursFeries.date.isValid() ? joursFeries.date.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.date = res.body.date ? moment(res.body.date) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((joursFeries: IJoursFeries) => {
        joursFeries.date = joursFeries.date ? moment(joursFeries.date) : undefined;
      });
    }
    return res;
  }
}
