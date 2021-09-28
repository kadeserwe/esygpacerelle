import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SygAutoriteContractanteService } from 'app/entities/referentielms/syg-autorite-contractante/syg-autorite-contractante.service';
import { ISygAutoriteContractante, SygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';

describe('Service Tests', () => {
  describe('SygAutoriteContractante Service', () => {
    let injector: TestBed;
    let service: SygAutoriteContractanteService;
    let httpMock: HttpTestingController;
    let elemDefault: ISygAutoriteContractante;
    let expectedResult: ISygAutoriteContractante | ISygAutoriteContractante[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(SygAutoriteContractanteService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new SygAutoriteContractante(
        0,
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'image/png',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a SygAutoriteContractante', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new SygAutoriteContractante()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a SygAutoriteContractante', () => {
        const returnedFromService = Object.assign(
          {
            ordre: 1,
            denomination: 'BBBBBB',
            responsable: 'BBBBBB',
            adresse: 'BBBBBB',
            telephone: 'BBBBBB',
            fax: 'BBBBBB',
            email: 'BBBBBB',
            sigle: 'BBBBBB',
            urlsiteweb: 'BBBBBB',
            approbation: 'BBBBBB',
            logo: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of SygAutoriteContractante', () => {
        const returnedFromService = Object.assign(
          {
            ordre: 1,
            denomination: 'BBBBBB',
            responsable: 'BBBBBB',
            adresse: 'BBBBBB',
            telephone: 'BBBBBB',
            fax: 'BBBBBB',
            email: 'BBBBBB',
            sigle: 'BBBBBB',
            urlsiteweb: 'BBBBBB',
            approbation: 'BBBBBB',
            logo: 'BBBBBB',
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

      it('should delete a SygAutoriteContractante', () => {
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
