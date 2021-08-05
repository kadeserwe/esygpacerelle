import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption, Pagination } from 'app/shared/util/request-util';
import { IPlanPassation } from 'app/shared/model/planpassationms/plan-passation.model';

type EntityResponseType = HttpResponse<IPlanPassation>;
type EntityArrayResponseType = HttpResponse<IPlanPassation[]>;

export interface PlanPassationsQuery extends Pagination {
  fromDate: string;
  toDate: string;
}

@Injectable({ providedIn: 'root' })
export class PlanPassationService {
  public resourceUrl = SERVER_API_URL + 'services/planpassationms/api/plan-passations';

  constructor(protected http: HttpClient) {}

  create(planPassation: IPlanPassation): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(planPassation);
    return this.http
      .post<IPlanPassation>(`${this.resourceUrl}/savePlan`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(planPassation: IPlanPassation): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(planPassation);
    return this.http
      .put<IPlanPassation>(`${this.resourceUrl}/updatePlan`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IPlanPassation>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IPlanPassation[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  query1(req: PlanPassationsQuery): Observable<HttpResponse<IPlanPassation[]>> {
    const params: HttpParams = createRequestOption(req);

    const requestURL = SERVER_API_URL + 'services/planpassationms/api/plan-passations';

    return this.http.get<IPlanPassation[]>(requestURL, {
      params,
      observe: 'response',
    });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  // getData() {
  //   return this.http.get('http://localhost:8080/contacts');
  // }

  getPpPubies(page: number, size: number): Observable<IPlanPassation[]> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    return this.http.get<IPlanPassation[]>(this.resourceUrl, { params });
  }

  protected convertDateFromClient(planPassation: IPlanPassation): IPlanPassation {
    const copy: IPlanPassation = Object.assign({}, planPassation, {
      dateDebut: planPassation.dateDebut && planPassation.dateDebut.isValid() ? planPassation.dateDebut.format(DATE_FORMAT) : undefined,
      dateFin: planPassation.dateFin && planPassation.dateFin.isValid() ? planPassation.dateFin.format(DATE_FORMAT) : undefined,
      dateCreation:
        planPassation.dateCreation && planPassation.dateCreation.isValid() ? planPassation.dateCreation.format(DATE_FORMAT) : undefined,
      dateMiseValidation:
        planPassation.dateMiseValidation && planPassation.dateMiseValidation.isValid()
          ? planPassation.dateMiseValidation.format(DATE_FORMAT)
          : undefined,
      dateValidation:
        planPassation.dateValidation && planPassation.dateValidation.isValid()
          ? planPassation.dateValidation.format(DATE_FORMAT)
          : undefined,
      dateMiseEnValidationCcmp:
        planPassation.dateMiseEnValidationCcmp && planPassation.dateMiseEnValidationCcmp.isValid()
          ? planPassation.dateMiseEnValidationCcmp.format(DATE_FORMAT)
          : undefined,
      dateValidation1:
        planPassation.dateValidation1 && planPassation.dateValidation1.isValid()
          ? planPassation.dateValidation1.format(DATE_FORMAT)
          : undefined,
      dateValidation2:
        planPassation.dateValidation2 && planPassation.dateValidation2.isValid()
          ? planPassation.dateValidation2.format(DATE_FORMAT)
          : undefined,
      dateRejet: planPassation.dateRejet && planPassation.dateRejet.isValid() ? planPassation.dateRejet.format(DATE_FORMAT) : undefined,
      datePublication:
        planPassation.datePublication && planPassation.datePublication.isValid()
          ? planPassation.datePublication.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateDebut = res.body.dateDebut ? moment(res.body.dateDebut) : undefined;
      res.body.dateFin = res.body.dateFin ? moment(res.body.dateFin) : undefined;
      res.body.dateCreation = res.body.dateCreation ? moment(res.body.dateCreation) : undefined;
      res.body.dateMiseValidation = res.body.dateMiseValidation ? moment(res.body.dateMiseValidation) : undefined;
      res.body.dateValidation = res.body.dateValidation ? moment(res.body.dateValidation) : undefined;
      res.body.dateMiseEnValidationCcmp = res.body.dateMiseEnValidationCcmp ? moment(res.body.dateMiseEnValidationCcmp) : undefined;
      res.body.dateValidation1 = res.body.dateValidation1 ? moment(res.body.dateValidation1) : undefined;
      res.body.dateValidation2 = res.body.dateValidation2 ? moment(res.body.dateValidation2) : undefined;
      res.body.dateRejet = res.body.dateRejet ? moment(res.body.dateRejet) : undefined;
      res.body.datePublication = res.body.datePublication ? moment(res.body.datePublication) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((planPassation: IPlanPassation) => {
        planPassation.dateDebut = planPassation.dateDebut ? moment(planPassation.dateDebut) : undefined;
        planPassation.dateFin = planPassation.dateFin ? moment(planPassation.dateFin) : undefined;
        planPassation.dateCreation = planPassation.dateCreation ? moment(planPassation.dateCreation) : undefined;
        planPassation.dateMiseValidation = planPassation.dateMiseValidation ? moment(planPassation.dateMiseValidation) : undefined;
        planPassation.dateValidation = planPassation.dateValidation ? moment(planPassation.dateValidation) : undefined;
        planPassation.dateMiseEnValidationCcmp = planPassation.dateMiseEnValidationCcmp
          ? moment(planPassation.dateMiseEnValidationCcmp)
          : undefined;
        planPassation.dateValidation1 = planPassation.dateValidation1 ? moment(planPassation.dateValidation1) : undefined;
        planPassation.dateValidation2 = planPassation.dateValidation2 ? moment(planPassation.dateValidation2) : undefined;
        planPassation.dateRejet = planPassation.dateRejet ? moment(planPassation.dateRejet) : undefined;
        planPassation.datePublication = planPassation.datePublication ? moment(planPassation.datePublication) : undefined;
      });
    }
    return res;
  }
}
