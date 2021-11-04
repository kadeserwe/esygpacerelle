import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPersonnesRessources } from 'app/shared/model/referentielms/personnes-ressources.model';

type EntityResponseType = HttpResponse<IPersonnesRessources>;
type EntityArrayResponseType = HttpResponse<IPersonnesRessources[]>;

@Injectable({ providedIn: 'root' })
export class PersonnesRessourcesService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/personnes-ressources';

  constructor(protected http: HttpClient) {}

  create(personnesRessources: IPersonnesRessources): Observable<EntityResponseType> {
    return this.http.post<IPersonnesRessources>(this.resourceUrl, personnesRessources, { observe: 'response' });
  }

  update(personnesRessources: IPersonnesRessources): Observable<EntityResponseType> {
    return this.http.put<IPersonnesRessources>(this.resourceUrl, personnesRessources, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPersonnesRessources>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPersonnesRessources[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
