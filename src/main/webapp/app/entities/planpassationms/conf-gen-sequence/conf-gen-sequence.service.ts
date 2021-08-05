import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IConfGenSequence } from 'app/shared/model/planpassationms/conf-gen-sequence.model';

type EntityResponseType = HttpResponse<IConfGenSequence>;
type EntityArrayResponseType = HttpResponse<IConfGenSequence[]>;

@Injectable({ providedIn: 'root' })
export class ConfGenSequenceService {
  public resourceUrl = SERVER_API_URL + 'services/planpassationms/api/conf-gen-sequences';

  constructor(protected http: HttpClient) {}

  create(confGenSequence: IConfGenSequence): Observable<EntityResponseType> {
    return this.http.post<IConfGenSequence>(this.resourceUrl, confGenSequence, { observe: 'response' });
  }

  update(confGenSequence: IConfGenSequence): Observable<EntityResponseType> {
    return this.http.put<IConfGenSequence>(this.resourceUrl, confGenSequence, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IConfGenSequence>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IConfGenSequence[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
