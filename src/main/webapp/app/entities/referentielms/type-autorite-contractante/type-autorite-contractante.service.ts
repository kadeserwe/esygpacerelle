import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ITypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';

type EntityResponseType = HttpResponse<ITypeAutoriteContractante>;
type EntityArrayResponseType = HttpResponse<ITypeAutoriteContractante[]>;

@Injectable({ providedIn: 'root' })
export class TypeAutoriteContractanteService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/type-autorite-contractantes';

  constructor(protected http: HttpClient) {}

  create(typeAutoriteContractante: ITypeAutoriteContractante): Observable<EntityResponseType> {
    return this.http.post<ITypeAutoriteContractante>(this.resourceUrl, typeAutoriteContractante, { observe: 'response' });
  }

  update(typeAutoriteContractante: ITypeAutoriteContractante, id: number): Observable<EntityResponseType> {
    return this.http.put<ITypeAutoriteContractante>(`${this.resourceUrl}/${id}`, typeAutoriteContractante, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITypeAutoriteContractante>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITypeAutoriteContractante[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
