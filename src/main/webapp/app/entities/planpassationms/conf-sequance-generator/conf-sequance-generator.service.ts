import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';

type EntityResponseType = HttpResponse<IConfSequanceGenerator>;
type EntityArrayResponseType = HttpResponse<IConfSequanceGenerator[]>;

@Injectable({ providedIn: 'root' })
export class ConfSequanceGeneratorService {
  public resourceUrl = SERVER_API_URL + 'services/planpassationms/api/conf-sequance-generators';

  constructor(protected http: HttpClient) {}

  create(confSequanceGenerator: IConfSequanceGenerator): Observable<EntityResponseType> {
    return this.http.post<IConfSequanceGenerator>(this.resourceUrl, confSequanceGenerator, { observe: 'response' });
  }

  update(confSequanceGenerator: IConfSequanceGenerator): Observable<EntityResponseType> {
    return this.http.put<IConfSequanceGenerator>(this.resourceUrl, confSequanceGenerator, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IConfSequanceGenerator>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IConfSequanceGenerator[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
