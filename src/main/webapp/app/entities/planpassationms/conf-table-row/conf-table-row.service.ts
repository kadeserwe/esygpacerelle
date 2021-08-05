import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IConfTableRow } from 'app/shared/model/planpassationms/conf-table-row.model';

type EntityResponseType = HttpResponse<IConfTableRow>;
type EntityArrayResponseType = HttpResponse<IConfTableRow[]>;

@Injectable({ providedIn: 'root' })
export class ConfTableRowService {
  public resourceUrl = SERVER_API_URL + 'services/planpassationms/api/conf-table-rows';

  constructor(protected http: HttpClient) {}

  create(confTableRow: IConfTableRow): Observable<EntityResponseType> {
    return this.http.post<IConfTableRow>(this.resourceUrl, confTableRow, { observe: 'response' });
  }

  update(confTableRow: IConfTableRow): Observable<EntityResponseType> {
    return this.http.put<IConfTableRow>(this.resourceUrl, confTableRow, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IConfTableRow>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IConfTableRow[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
