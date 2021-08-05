import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfSequanceGeneratorService } from 'app/entities/planpassationms/conf-sequance-generator/conf-sequance-generator.service';
import { IConfSequanceGenerator, ConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';

describe('Service Tests', () => {
  describe('ConfSequanceGenerator Service', () => {
    let injector: TestBed;
    let service: ConfSequanceGeneratorService;
    let httpMock: HttpTestingController;
    let elemDefault: IConfSequanceGenerator;
    let expectedResult: IConfSequanceGenerator | IConfSequanceGenerator[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ConfSequanceGeneratorService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new ConfSequanceGenerator(0, 'AAAAAAA', 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a ConfSequanceGenerator', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new ConfSequanceGenerator()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a ConfSequanceGenerator', () => {
        const returnedFromService = Object.assign(
          {
            nomTable: 'BBBBBB',
            currentValue: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of ConfSequanceGenerator', () => {
        const returnedFromService = Object.assign(
          {
            nomTable: 'BBBBBB',
            currentValue: 1,
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

      it('should delete a ConfSequanceGenerator', () => {
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
