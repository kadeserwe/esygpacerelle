import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TypeAutoriteContractanteService } from 'app/entities/referentielms/type-autorite-contractante/type-autorite-contractante.service';
import { ITypeAutoriteContractante, TypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';

describe('Service Tests', () => {
  describe('TypeAutoriteContractante Service', () => {
    let injector: TestBed;
    let service: TypeAutoriteContractanteService;
    let httpMock: HttpTestingController;
    let elemDefault: ITypeAutoriteContractante;
    let expectedResult: ITypeAutoriteContractante | ITypeAutoriteContractante[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(TypeAutoriteContractanteService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new TypeAutoriteContractante(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a TypeAutoriteContractante', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new TypeAutoriteContractante()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a TypeAutoriteContractante', () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            code: 'BBBBBB',
            description: 'BBBBBB',
            ordre: 1,
            chapitre: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of TypeAutoriteContractante', () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            code: 'BBBBBB',
            description: 'BBBBBB',
            ordre: 1,
            chapitre: 'BBBBBB',
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

      it('should delete a TypeAutoriteContractante', () => {
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
