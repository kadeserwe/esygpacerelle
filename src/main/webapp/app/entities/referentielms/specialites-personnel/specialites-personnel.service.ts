import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISpecialitesPersonnel } from 'app/shared/model/referentielms/specialites-personnel.model';

type EntityResponseType = HttpResponse<ISpecialitesPersonnel>;
type EntityArrayResponseType = HttpResponse<ISpecialitesPersonnel[]>;

@Injectable({ providedIn: 'root' })
export class SpecialitesPersonnelService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/specialites-personnels';

  constructor(protected http: HttpClient) {}

  create(specialitesPersonnel: ISpecialitesPersonnel): Observable<EntityResponseType> {
    return this.http.post<ISpecialitesPersonnel>(this.resourceUrl, specialitesPersonnel, { observe: 'response' });
  }

  update(specialitesPersonnel: ISpecialitesPersonnel): Observable<EntityResponseType> {
    return this.http.put<ISpecialitesPersonnel>(this.resourceUrl, specialitesPersonnel, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISpecialitesPersonnel>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISpecialitesPersonnel[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
