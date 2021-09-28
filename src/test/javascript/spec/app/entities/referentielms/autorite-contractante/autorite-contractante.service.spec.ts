import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AutoriteContractanteService } from 'app/entities/referentielms/autorite-contractante/autorite-contractante.service';
import { IAutoriteContractante, AutoriteContractante } from 'app/shared/model/referentielms/autorite-contractante.model';

describe('Service Tests', () => {
  describe('AutoriteContractante Service', () => {
    let injector: TestBed;
    let service: AutoriteContractanteService;
    let httpMock: HttpTestingController;
    let elemDefault: IAutoriteContractante;
    let expectedResult: IAutoriteContractante | IAutoriteContractante[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(AutoriteContractanteService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new AutoriteContractante(
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

      it('should return a list of AutoriteContractante', () => {
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
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
