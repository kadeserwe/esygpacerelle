import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IAvisGeneraux } from 'app/shared/model/referentielms/avis-generaux.model';

type EntityResponseType = HttpResponse<IAvisGeneraux>;
type EntityArrayResponseType = HttpResponse<IAvisGeneraux[]>;

@Injectable({ providedIn: 'root' })
export class AvisGenerauxService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/avis-generauxes';

  constructor(protected http: HttpClient) {}

  create(avisGeneraux: IAvisGeneraux): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(avisGeneraux);
    return this.http
      .post<IAvisGeneraux>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(avisGeneraux: IAvisGeneraux): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(avisGeneraux);
    return this.http
      .put<IAvisGeneraux>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IAvisGeneraux>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAvisGeneraux[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(avisGeneraux: IAvisGeneraux): IAvisGeneraux {
    const copy: IAvisGeneraux = Object.assign({}, avisGeneraux, {
      datePublication:
        avisGeneraux.datePublication && avisGeneraux.datePublication.isValid() ? avisGeneraux.datePublication.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.datePublication = res.body.datePublication ? moment(res.body.datePublication) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((avisGeneraux: IAvisGeneraux) => {
        avisGeneraux.datePublication = avisGeneraux.datePublication ? moment(avisGeneraux.datePublication) : undefined;
      });
    }
    return res;
  }
}
