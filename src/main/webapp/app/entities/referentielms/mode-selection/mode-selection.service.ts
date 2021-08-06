import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IModeSelection } from 'app/shared/model/referentielms/mode-selection.model';

type EntityResponseType = HttpResponse<IModeSelection>;
type EntityArrayResponseType = HttpResponse<IModeSelection[]>;

@Injectable({ providedIn: 'root' })
export class ModeSelectionService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/mode-selections';

  constructor(protected http: HttpClient) {}

  create(modeSelection: IModeSelection): Observable<EntityResponseType> {
    return this.http.post<IModeSelection>(this.resourceUrl, modeSelection, { observe: 'response' });
  }

  update(modeSelection: IModeSelection): Observable<EntityResponseType> {
    return this.http.put<IModeSelection>(this.resourceUrl, modeSelection, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IModeSelection>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IModeSelection[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
