import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDelais } from 'app/shared/model/referentielms/delais.model';

type EntityResponseType = HttpResponse<IDelais>;
type EntityArrayResponseType = HttpResponse<IDelais[]>;

@Injectable({ providedIn: 'root' })
export class DelaisService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/delais';

  constructor(protected http: HttpClient) {}

  create(delais: IDelais): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(delais);
    return this.http
      .post<IDelais>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(delais: IDelais): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(delais);
    return this.http
      .put<IDelais>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDelais>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDelais[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(delais: IDelais): IDelais {
    const copy: IDelais = Object.assign({}, delais, {
      debutValidite: delais.debutValidite && delais.debutValidite.isValid() ? delais.debutValidite.toJSON() : undefined,
      finValidite: delais.finValidite && delais.finValidite.isValid() ? delais.finValidite.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.debutValidite = res.body.debutValidite ? moment(res.body.debutValidite) : undefined;
      res.body.finValidite = res.body.finValidite ? moment(res.body.finValidite) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((delais: IDelais) => {
        delais.debutValidite = delais.debutValidite ? moment(delais.debutValidite) : undefined;
        delais.finValidite = delais.finValidite ? moment(delais.finValidite) : undefined;
      });
    }
    return res;
  }
}
