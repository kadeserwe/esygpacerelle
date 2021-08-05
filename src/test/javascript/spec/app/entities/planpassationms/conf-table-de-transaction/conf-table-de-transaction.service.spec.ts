import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { ConfTableDeTransactionService } from 'app/entities/planpassationms/conf-table-de-transaction/conf-table-de-transaction.service';
import { IConfTableDeTransaction, ConfTableDeTransaction } from 'app/shared/model/planpassationms/conf-table-de-transaction.model';
import { DataType } from 'app/shared/model/enumerations/data-type.model';

describe('Service Tests', () => {
  describe('ConfTableDeTransaction Service', () => {
    let injector: TestBed;
    let service: ConfTableDeTransactionService;
    let httpMock: HttpTestingController;
    let elemDefault: IConfTableDeTransaction;
    let expectedResult: IConfTableDeTransaction | IConfTableDeTransaction[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ConfTableDeTransactionService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new ConfTableDeTransaction(
        0,
        'AAAAAAA',
        'AAAAAAA',
        0,
        DataType.INT,
        0,
        0,
        false,
        0,
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate,
        currentDate,
        0,
        0,
        0,
        0,
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateValue: currentDate.format(DATE_FORMAT),
            instantValue: currentDate.format(DATE_TIME_FORMAT),
            zonedDateTimeValue: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should return a list of ConfTableDeTransaction', () => {
        const returnedFromService = Object.assign(
          {
            tableName: 'BBBBBB',
            columnName: 'BBBBBB',
            numeroLigne: 1,
            dataType: 'BBBBBB',
            masterId: 1,
            intValue: 1,
            booleanValue: true,
            moneyValue: 1,
            stringValue: 'BBBBBB',
            textValue: 'BBBBBB',
            dateValue: currentDate.format(DATE_FORMAT),
            instantValue: currentDate.format(DATE_TIME_FORMAT),
            zonedDateTimeValue: currentDate.format(DATE_TIME_FORMAT),
            longValue: 1,
            floatValue: 1,
            doubleValue: 1,
            durationValue: 'BBBBBB',
            uuidValue: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateValue: currentDate,
            instantValue: currentDate,
            zonedDateTimeValue: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
