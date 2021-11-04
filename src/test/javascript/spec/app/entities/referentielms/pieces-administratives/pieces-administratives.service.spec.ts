import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PiecesAdministrativesService } from 'app/entities/referentielms/pieces-administratives/pieces-administratives.service';
import { IPiecesAdministratives, PiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';
import { enumLocalisation } from 'app/shared/model/enumerations/enum-localisation.model';

describe('Service Tests', () => {
  describe('PiecesAdministratives Service', () => {
    let injector: TestBed;
    let service: PiecesAdministrativesService;
    let httpMock: HttpTestingController;
    let elemDefault: IPiecesAdministratives;
    let expectedResult: IPiecesAdministratives | IPiecesAdministratives[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(PiecesAdministrativesService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new PiecesAdministratives(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', enumLocalisation.LOCALES, 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a PiecesAdministratives', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new PiecesAdministratives()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a PiecesAdministratives', () => {
        const returnedFromService = Object.assign(
          {
            code: 'BBBBBB',
            libelle: 'BBBBBB',
            description: 'BBBBBB',
            localisation: 'BBBBBB',
            type: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of PiecesAdministratives', () => {
        const returnedFromService = Object.assign(
          {
            code: 'BBBBBB',
            libelle: 'BBBBBB',
            description: 'BBBBBB',
            localisation: 'BBBBBB',
            type: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a PiecesAdministratives', () => {
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
