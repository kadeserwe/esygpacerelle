import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IGroupesImputation } from 'app/shared/model/referentielms/groupes-imputation.model';

type EntityResponseType = HttpResponse<IGroupesImputation>;
type EntityArrayResponseType = HttpResponse<IGroupesImputation[]>;

@Injectable({ providedIn: 'root' })
export class GroupesImputationService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/groupes-imputations';

  constructor(protected http: HttpClient) {}

  create(groupesImputation: IGroupesImputation): Observable<EntityResponseType> {
    return this.http.post<IGroupesImputation>(this.resourceUrl, groupesImputation, { observe: 'response' });
  }

  update(groupesImputation: IGroupesImputation): Observable<EntityResponseType> {
    return this.http.put<IGroupesImputation>(this.resourceUrl, groupesImputation, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IGroupesImputation>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IGroupesImputation[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
