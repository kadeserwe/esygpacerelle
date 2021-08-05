import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISygRealisation } from 'app/shared/model/planpassationms/syg-realisation.model';

type EntityResponseType = HttpResponse<ISygRealisation>;
type EntityArrayResponseType = HttpResponse<ISygRealisation[]>;

@Injectable({ providedIn: 'root' })
export class SygRealisationService {
  public resourceUrl = SERVER_API_URL + 'services/planpassationms/api/syg-realisations';

  constructor(protected http: HttpClient) {}

  create(sygRealisation: ISygRealisation): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(sygRealisation);
    return this.http
      .post<ISygRealisation>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(sygRealisation: ISygRealisation): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(sygRealisation);
    return this.http
      .put<ISygRealisation>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ISygRealisation>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISygRealisation[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(sygRealisation: ISygRealisation): ISygRealisation {
    const copy: ISygRealisation = Object.assign({}, sygRealisation, {
      dateAttribution:
        sygRealisation.dateAttribution && sygRealisation.dateAttribution.isValid()
          ? sygRealisation.dateAttribution.format(DATE_FORMAT)
          : undefined,
      dateReceptionDossier:
        sygRealisation.dateReceptionDossier && sygRealisation.dateReceptionDossier.isValid()
          ? sygRealisation.dateReceptionDossier.format(DATE_FORMAT)
          : undefined,
      dateNonObjection:
        sygRealisation.dateNonObjection && sygRealisation.dateNonObjection.isValid()
          ? sygRealisation.dateNonObjection.format(DATE_FORMAT)
          : undefined,
      dateAutorisation:
        sygRealisation.dateAutorisation && sygRealisation.dateAutorisation.isValid()
          ? sygRealisation.dateAutorisation.format(DATE_FORMAT)
          : undefined,
      dateRecepNonObjection:
        sygRealisation.dateRecepNonObjection && sygRealisation.dateRecepNonObjection.isValid()
          ? sygRealisation.dateRecepNonObjection.format(DATE_FORMAT)
          : undefined,
      dateRecepDossCorrige:
        sygRealisation.dateRecepDossCorrige && sygRealisation.dateRecepDossCorrige.isValid()
          ? sygRealisation.dateRecepDossCorrige.format(DATE_FORMAT)
          : undefined,
      datePubParPrmp:
        sygRealisation.datePubParPrmp && sygRealisation.datePubParPrmp.isValid()
          ? sygRealisation.datePubParPrmp.format(DATE_FORMAT)
          : undefined,
      dateOuverturePlis:
        sygRealisation.dateOuverturePlis && sygRealisation.dateOuverturePlis.isValid()
          ? sygRealisation.dateOuverturePlis.format(DATE_FORMAT)
          : undefined,
      dateRecepNonObjectOcmp:
        sygRealisation.dateRecepNonObjectOcmp && sygRealisation.dateRecepNonObjectOcmp.isValid()
          ? sygRealisation.dateRecepNonObjectOcmp.format(DATE_FORMAT)
          : undefined,
      dateRecepRapportEva:
        sygRealisation.dateRecepRapportEva && sygRealisation.dateRecepRapportEva.isValid()
          ? sygRealisation.dateRecepRapportEva.format(DATE_FORMAT)
          : undefined,
      dateRecepNonObjectPtf:
        sygRealisation.dateRecepNonObjectPtf && sygRealisation.dateRecepNonObjectPtf.isValid()
          ? sygRealisation.dateRecepNonObjectPtf.format(DATE_FORMAT)
          : undefined,
      dateExamenJuridique:
        sygRealisation.dateExamenJuridique && sygRealisation.dateExamenJuridique.isValid()
          ? sygRealisation.dateExamenJuridique.format(DATE_FORMAT)
          : undefined,
      dateNotifContrat:
        sygRealisation.dateNotifContrat && sygRealisation.dateNotifContrat.isValid()
          ? sygRealisation.dateNotifContrat.format(DATE_FORMAT)
          : undefined,
      dateApprobationContrat:
        sygRealisation.dateApprobationContrat && sygRealisation.dateApprobationContrat.isValid()
          ? sygRealisation.dateApprobationContrat.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateAttribution = res.body.dateAttribution ? moment(res.body.dateAttribution) : undefined;
      res.body.dateReceptionDossier = res.body.dateReceptionDossier ? moment(res.body.dateReceptionDossier) : undefined;
      res.body.dateNonObjection = res.body.dateNonObjection ? moment(res.body.dateNonObjection) : undefined;
      res.body.dateAutorisation = res.body.dateAutorisation ? moment(res.body.dateAutorisation) : undefined;
      res.body.dateRecepNonObjection = res.body.dateRecepNonObjection ? moment(res.body.dateRecepNonObjection) : undefined;
      res.body.dateRecepDossCorrige = res.body.dateRecepDossCorrige ? moment(res.body.dateRecepDossCorrige) : undefined;
      res.body.datePubParPrmp = res.body.datePubParPrmp ? moment(res.body.datePubParPrmp) : undefined;
      res.body.dateOuverturePlis = res.body.dateOuverturePlis ? moment(res.body.dateOuverturePlis) : undefined;
      res.body.dateRecepNonObjectOcmp = res.body.dateRecepNonObjectOcmp ? moment(res.body.dateRecepNonObjectOcmp) : undefined;
      res.body.dateRecepRapportEva = res.body.dateRecepRapportEva ? moment(res.body.dateRecepRapportEva) : undefined;
      res.body.dateRecepNonObjectPtf = res.body.dateRecepNonObjectPtf ? moment(res.body.dateRecepNonObjectPtf) : undefined;
      res.body.dateExamenJuridique = res.body.dateExamenJuridique ? moment(res.body.dateExamenJuridique) : undefined;
      res.body.dateNotifContrat = res.body.dateNotifContrat ? moment(res.body.dateNotifContrat) : undefined;
      res.body.dateApprobationContrat = res.body.dateApprobationContrat ? moment(res.body.dateApprobationContrat) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((sygRealisation: ISygRealisation) => {
        sygRealisation.dateAttribution = sygRealisation.dateAttribution ? moment(sygRealisation.dateAttribution) : undefined;
        sygRealisation.dateReceptionDossier = sygRealisation.dateReceptionDossier ? moment(sygRealisation.dateReceptionDossier) : undefined;
        sygRealisation.dateNonObjection = sygRealisation.dateNonObjection ? moment(sygRealisation.dateNonObjection) : undefined;
        sygRealisation.dateAutorisation = sygRealisation.dateAutorisation ? moment(sygRealisation.dateAutorisation) : undefined;
        sygRealisation.dateRecepNonObjection = sygRealisation.dateRecepNonObjection
          ? moment(sygRealisation.dateRecepNonObjection)
          : undefined;
        sygRealisation.dateRecepDossCorrige = sygRealisation.dateRecepDossCorrige ? moment(sygRealisation.dateRecepDossCorrige) : undefined;
        sygRealisation.datePubParPrmp = sygRealisation.datePubParPrmp ? moment(sygRealisation.datePubParPrmp) : undefined;
        sygRealisation.dateOuverturePlis = sygRealisation.dateOuverturePlis ? moment(sygRealisation.dateOuverturePlis) : undefined;
        sygRealisation.dateRecepNonObjectOcmp = sygRealisation.dateRecepNonObjectOcmp
          ? moment(sygRealisation.dateRecepNonObjectOcmp)
          : undefined;
        sygRealisation.dateRecepRapportEva = sygRealisation.dateRecepRapportEva ? moment(sygRealisation.dateRecepRapportEva) : undefined;
        sygRealisation.dateRecepNonObjectPtf = sygRealisation.dateRecepNonObjectPtf
          ? moment(sygRealisation.dateRecepNonObjectPtf)
          : undefined;
        sygRealisation.dateExamenJuridique = sygRealisation.dateExamenJuridique ? moment(sygRealisation.dateExamenJuridique) : undefined;
        sygRealisation.dateNotifContrat = sygRealisation.dateNotifContrat ? moment(sygRealisation.dateNotifContrat) : undefined;
        sygRealisation.dateApprobationContrat = sygRealisation.dateApprobationContrat
          ? moment(sygRealisation.dateApprobationContrat)
          : undefined;
      });
    }
    return res;
  }
}
