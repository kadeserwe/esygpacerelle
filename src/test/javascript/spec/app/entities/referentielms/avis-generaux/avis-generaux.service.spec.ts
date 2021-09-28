import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { AvisGenerauxService } from 'app/entities/referentielms/avis-generaux/avis-generaux.service';
import { IAvisGeneraux, AvisGeneraux } from 'app/shared/model/referentielms/avis-generaux.model';

describe('Service Tests', () => {
  describe('AvisGeneraux Service', () => {
    let injector: TestBed;
    let service: AvisGenerauxService;
    let httpMock: HttpTestingController;
    let elemDefault: IAvisGeneraux;
    let expectedResult: IAvisGeneraux | IAvisGeneraux[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(AvisGenerauxService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new AvisGeneraux(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'image/png', 'AAAAAAA', 0, 0, 'AAAAAAA', currentDate);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            datePublication: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a AvisGeneraux', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            datePublication: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            datePublication: currentDate,
          },
          returnedFromService
        );

        service.create(new AvisGeneraux()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a AvisGeneraux', () => {
        const returnedFromService = Object.assign(
          {
            numero: 'BBBBBB',
            annee: 'BBBBBB',
            description: 'BBBBBB',
            fichierAvis: 'BBBBBB',
            version: 1,
            lastVersionValid: 1,
            etat: 'BBBBBB',
            datePublication: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            datePublication: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of AvisGeneraux', () => {
        const returnedFromService = Object.assign(
          {
            numero: 'BBBBBB',
            annee: 'BBBBBB',
            description: 'BBBBBB',
            fichierAvis: 'BBBBBB',
            version: 1,
            lastVersionValid: 1,
            etat: 'BBBBBB',
            datePublication: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            datePublication: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a AvisGeneraux', () => {
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
