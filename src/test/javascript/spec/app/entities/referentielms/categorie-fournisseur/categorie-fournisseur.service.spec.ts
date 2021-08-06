import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategorieFournisseurService } from 'app/entities/referentielms/categorie-fournisseur/categorie-fournisseur.service';
import { ICategorieFournisseur, CategorieFournisseur } from 'app/shared/model/referentielms/categorie-fournisseur.model';

describe('Service Tests', () => {
  describe('CategorieFournisseur Service', () => {
    let injector: TestBed;
    let service: CategorieFournisseurService;
    let httpMock: HttpTestingController;
    let elemDefault: ICategorieFournisseur;
    let expectedResult: ICategorieFournisseur | ICategorieFournisseur[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(CategorieFournisseurService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new CategorieFournisseur(0, 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a CategorieFournisseur', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new CategorieFournisseur()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a CategorieFournisseur', () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            description: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of CategorieFournisseur', () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            description: 'BBBBBB',
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

      it('should delete a CategorieFournisseur', () => {
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
