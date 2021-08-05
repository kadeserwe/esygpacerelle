import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfTableRowService } from 'app/entities/planpassationms/conf-table-row/conf-table-row.service';
import { IConfTableRow, ConfTableRow } from 'app/shared/model/planpassationms/conf-table-row.model';
import { DataType } from 'app/shared/model/enumerations/data-type.model';

describe('Service Tests', () => {
  describe('ConfTableRow Service', () => {
    let injector: TestBed;
    let service: ConfTableRowService;
    let httpMock: HttpTestingController;
    let elemDefault: IConfTableRow;
    let expectedResult: IConfTableRow | IConfTableRow[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ConfTableRowService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new ConfTableRow(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', DataType.INT);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a ConfTableRow', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new ConfTableRow()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a ConfTableRow', () => {
        const returnedFromService = Object.assign(
          {
            tableName: 'BBBBBB',
            labelName: 'BBBBBB',
            columnName: 'BBBBBB',
            dataType: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of ConfTableRow', () => {
        const returnedFromService = Object.assign(
          {
            tableName: 'BBBBBB',
            labelName: 'BBBBBB',
            columnName: 'BBBBBB',
            dataType: 'BBBBBB',
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

      it('should delete a ConfTableRow', () => {
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
