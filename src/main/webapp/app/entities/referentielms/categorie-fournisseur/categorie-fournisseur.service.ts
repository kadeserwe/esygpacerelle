import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICategorieFournisseur } from 'app/shared/model/referentielms/categorie-fournisseur.model';

type EntityResponseType = HttpResponse<ICategorieFournisseur>;
type EntityArrayResponseType = HttpResponse<ICategorieFournisseur[]>;

@Injectable({ providedIn: 'root' })
export class CategorieFournisseurService {
  public resourceUrl = SERVER_API_URL + 'services/referentielms/api/categorie-fournisseurs';

  constructor(protected http: HttpClient) {}

  create(categorieFournisseur: ICategorieFournisseur): Observable<EntityResponseType> {
    return this.http.post<ICategorieFournisseur>(this.resourceUrl, categorieFournisseur, { observe: 'response' });
  }

  update(categorieFournisseur: ICategorieFournisseur, id: number): Observable<EntityResponseType> {
    return this.http.put<ICategorieFournisseur>(`${this.resourceUrl}/${id}`, categorieFournisseur, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICategorieFournisseur>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICategorieFournisseur[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
