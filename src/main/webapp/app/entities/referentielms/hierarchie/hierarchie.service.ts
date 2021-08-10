import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IHierarchie } from 'app/shared/model/referentielms/hierarchie.model';

type EntityResponseType = HttpResponse<IHierarchie>;
type EntityArrayResponseType = HttpResponse<IHierarchie[]>;

@Injectable({ providedIn: 'root' })
export class HierarchieService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/hierarchies';

  constructor(protected http: HttpClient) {}

  create(hierarchie: IHierarchie): Observable<EntityResponseType> {
    return this.http.post<IHierarchie>(this.resourceUrl, hierarchie, { observe: 'response' });
  }

  update(hierarchie: IHierarchie): Observable<EntityResponseType> {
    return this.http.put<IHierarchie>(this.resourceUrl, hierarchie, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IHierarchie>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IHierarchie[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
