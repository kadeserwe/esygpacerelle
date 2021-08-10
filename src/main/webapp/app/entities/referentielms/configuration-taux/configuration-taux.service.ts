import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';

type EntityResponseType = HttpResponse<IConfigurationTaux>;
type EntityArrayResponseType = HttpResponse<IConfigurationTaux[]>;

@Injectable({ providedIn: 'root' })
export class ConfigurationTauxService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/configuration-tauxes';

  constructor(protected http: HttpClient) {}

  create(configurationTaux: IConfigurationTaux): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(configurationTaux);
    return this.http
      .post<IConfigurationTaux>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(configurationTaux: IConfigurationTaux): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(configurationTaux);
    return this.http
      .put<IConfigurationTaux>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IConfigurationTaux>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IConfigurationTaux[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(configurationTaux: IConfigurationTaux): IConfigurationTaux {
    const copy: IConfigurationTaux = Object.assign({}, configurationTaux, {
      dateDebut: configurationTaux.dateDebut && configurationTaux.dateDebut.isValid() ? configurationTaux.dateDebut.toJSON() : undefined,
      dateFin: configurationTaux.dateFin && configurationTaux.dateFin.isValid() ? configurationTaux.dateFin.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateDebut = res.body.dateDebut ? moment(res.body.dateDebut) : undefined;
      res.body.dateFin = res.body.dateFin ? moment(res.body.dateFin) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((configurationTaux: IConfigurationTaux) => {
        configurationTaux.dateDebut = configurationTaux.dateDebut ? moment(configurationTaux.dateDebut) : undefined;
        configurationTaux.dateFin = configurationTaux.dateFin ? moment(configurationTaux.dateFin) : undefined;
      });
    }
    return res;
  }
}
