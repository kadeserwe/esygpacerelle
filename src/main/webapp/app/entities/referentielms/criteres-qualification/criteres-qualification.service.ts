import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';

type EntityResponseType = HttpResponse<ICriteresQualification>;
type EntityArrayResponseType = HttpResponse<ICriteresQualification[]>;

@Injectable({ providedIn: 'root' })
export class CriteresQualificationService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/criteres-qualifications';

  constructor(protected http: HttpClient) {}

  create(criteresQualification: ICriteresQualification): Observable<EntityResponseType> {
    return this.http.post<ICriteresQualification>(this.resourceUrl, criteresQualification, { observe: 'response' });
  }

  update(criteresQualification: ICriteresQualification): Observable<EntityResponseType> {
    return this.http.put<ICriteresQualification>(this.resourceUrl, criteresQualification, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICriteresQualification>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICriteresQualification[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
