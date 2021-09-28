import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';

type EntityResponseType = HttpResponse<ISygAutoriteContractante>;
type EntityArrayResponseType = HttpResponse<ISygAutoriteContractante[]>;

@Injectable({ providedIn: 'root' })
export class SygAutoriteContractanteService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/syg-autorite-contractantes';

  constructor(protected http: HttpClient) {}

  create(sygAutoriteContractante: ISygAutoriteContractante): Observable<EntityResponseType> {
    return this.http.post<ISygAutoriteContractante>(this.resourceUrl, sygAutoriteContractante, { observe: 'response' });
  }

  update(sygAutoriteContractante: ISygAutoriteContractante): Observable<EntityResponseType> {
    return this.http.put<ISygAutoriteContractante>(this.resourceUrl, sygAutoriteContractante, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISygAutoriteContractante>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISygAutoriteContractante[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
