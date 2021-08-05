import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfTableDeTransactionComponent } from 'app/entities/planpassationms/conf-table-de-transaction/conf-table-de-transaction.component';
import { ConfTableDeTransactionService } from 'app/entities/planpassationms/conf-table-de-transaction/conf-table-de-transaction.service';
import { ConfTableDeTransaction } from 'app/shared/model/planpassationms/conf-table-de-transaction.model';

describe('Component Tests', () => {
  describe('ConfTableDeTransaction Management Component', () => {
    let comp: ConfTableDeTransactionComponent;
    let fixture: ComponentFixture<ConfTableDeTransactionComponent>;
    let service: ConfTableDeTransactionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfTableDeTransactionComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              data: of({
                defaultSort: 'id,asc',
              }),
              queryParamMap: of(
                convertToParamMap({
                  page: '1',
                  size: '1',
                  sort: 'id,desc',
                })
              ),
            },
          },
        ],
      })
        .overrideTemplate(ConfTableDeTransactionComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ConfTableDeTransactionComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ConfTableDeTransactionService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new ConfTableDeTransaction(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.confTableDeTransactions && comp.confTableDeTransactions[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new ConfTableDeTransaction(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.confTableDeTransactions && comp.confTableDeTransactions[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      comp.ngOnInit();
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // INIT
      comp.ngOnInit();

      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });
  });
});
