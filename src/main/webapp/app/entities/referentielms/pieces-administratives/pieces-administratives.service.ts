import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';

type EntityResponseType = HttpResponse<IPiecesAdministratives>;
type EntityArrayResponseType = HttpResponse<IPiecesAdministratives[]>;

@Injectable({ providedIn: 'root' })
export class PiecesAdministrativesService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/pieces-administratives';

  constructor(protected http: HttpClient) {}

  create(piecesAdministratives: IPiecesAdministratives): Observable<EntityResponseType> {
    return this.http.post<IPiecesAdministratives>(this.resourceUrl, piecesAdministratives, { observe: 'response' });
  }

  update(piecesAdministratives: IPiecesAdministratives): Observable<EntityResponseType> {
    return this.http.put<IPiecesAdministratives>(this.resourceUrl, piecesAdministratives, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPiecesAdministratives>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPiecesAdministratives[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
