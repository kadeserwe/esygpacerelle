import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FournisseurService } from 'app/entities/referentielms/fournisseur/fournisseur.service';
import { IFournisseur, Fournisseur } from 'app/shared/model/referentielms/fournisseur.model';

describe('Service Tests', () => {
  describe('Fournisseur Service', () => {
    let injector: TestBed;
    let service: FournisseurService;
    let httpMock: HttpTestingController;
    let elemDefault: IFournisseur;
    let expectedResult: IFournisseur | IFournisseur[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(FournisseurService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Fournisseur(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        'AAAAAAA',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            date: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Fournisseur', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            date: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            date: currentDate,
          },
          returnedFromService
        );

        service.create(new Fournisseur()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Fournisseur', () => {
        const returnedFromService = Object.assign(
          {
            raisonSociale: 'BBBBBB',
            adresse: 'BBBBBB',
            email: 'BBBBBB',
            fax: 'BBBBBB',
            telephone: 'BBBBBB',
            pieceJointe: 'BBBBBB',
            numeroRegistreCommerce: 'BBBBBB',
            date: currentDate.format(DATE_TIME_FORMAT),
            sigle: 'BBBBBB',
            numeroIdentiteFiscale: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            date: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Fournisseur', () => {
        const returnedFromService = Object.assign(
          {
            raisonSociale: 'BBBBBB',
            adresse: 'BBBBBB',
            email: 'BBBBBB',
            fax: 'BBBBBB',
            telephone: 'BBBBBB',
            pieceJointe: 'BBBBBB',
            numeroRegistreCommerce: 'BBBBBB',
            date: currentDate.format(DATE_TIME_FORMAT),
            sigle: 'BBBBBB',
            numeroIdentiteFiscale: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            date: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Fournisseur', () => {
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
