import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { DelaisService } from 'app/entities/referentielms/delais/delais.service';
import { IDelais, Delais } from 'app/shared/model/referentielms/delais.model';

describe('Service Tests', () => {
  describe('Delais Service', () => {
    let injector: TestBed;
    let service: DelaisService;
    let httpMock: HttpTestingController;
    let elemDefault: IDelais;
    let expectedResult: IDelais | IDelais[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DelaisService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Delais(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0, currentDate, currentDate, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            debutValidite: currentDate.format(DATE_TIME_FORMAT),
            finValidite: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Delais', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            debutValidite: currentDate.format(DATE_TIME_FORMAT),
            finValidite: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            debutValidite: currentDate,
            finValidite: currentDate,
          },
          returnedFromService
        );

        service.create(new Delais()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Delais', () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            code: 'BBBBBB',
            unite: 'BBBBBB',
            valeur: 1,
            debutValidite: currentDate.format(DATE_TIME_FORMAT),
            finValidite: currentDate.format(DATE_TIME_FORMAT),
            commentaires: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            debutValidite: currentDate,
            finValidite: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Delais', () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            code: 'BBBBBB',
            unite: 'BBBBBB',
            valeur: 1,
            debutValidite: currentDate.format(DATE_TIME_FORMAT),
            finValidite: currentDate.format(DATE_TIME_FORMAT),
            commentaires: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            debutValidite: currentDate,
            finValidite: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Delais', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
