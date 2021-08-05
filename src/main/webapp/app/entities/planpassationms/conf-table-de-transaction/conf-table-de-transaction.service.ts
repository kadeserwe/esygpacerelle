import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IConfTableDeTransaction } from 'app/shared/model/planpassationms/conf-table-de-transaction.model';

type EntityResponseType = HttpResponse<IConfTableDeTransaction>;
type EntityArrayResponseType = HttpResponse<IConfTableDeTransaction[]>;

@Injectable({ providedIn: 'root' })
export class ConfTableDeTransactionService {
  public resourceUrl = SERVER_API_URL + 'services/planpassationms/api/conf-table-de-transactions';

  constructor(protected http: HttpClient) {}

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IConfTableDeTransaction>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IConfTableDeTransaction[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  protected convertDateFromClient(confTableDeTransaction: IConfTableDeTransaction): IConfTableDeTransaction {
    const copy: IConfTableDeTransaction = Object.assign({}, confTableDeTransaction, {
      dateValue:
        confTableDeTransaction.dateValue && confTableDeTransaction.dateValue.isValid()
          ? confTableDeTransaction.dateValue.format(DATE_FORMAT)
          : undefined,
      instantValue:
        confTableDeTransaction.instantValue && confTableDeTransaction.instantValue.isValid()
          ? confTableDeTransaction.instantValue.toJSON()
          : undefined,
      zonedDateTimeValue:
        confTableDeTransaction.zonedDateTimeValue && confTableDeTransaction.zonedDateTimeValue.isValid()
          ? confTableDeTransaction.zonedDateTimeValue.toJSON()
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateValue = res.body.dateValue ? moment(res.body.dateValue) : undefined;
      res.body.instantValue = res.body.instantValue ? moment(res.body.instantValue) : undefined;
      res.body.zonedDateTimeValue = res.body.zonedDateTimeValue ? moment(res.body.zonedDateTimeValue) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((confTableDeTransaction: IConfTableDeTransaction) => {
        confTableDeTransaction.dateValue = confTableDeTransaction.dateValue ? moment(confTableDeTransaction.dateValue) : undefined;
        confTableDeTransaction.instantValue = confTableDeTransaction.instantValue ? moment(confTableDeTransaction.instantValue) : undefined;
        confTableDeTransaction.zonedDateTimeValue = confTableDeTransaction.zonedDateTimeValue
          ? moment(confTableDeTransaction.zonedDateTimeValue)
          : undefined;
      });
    }
    return res;
  }
}
