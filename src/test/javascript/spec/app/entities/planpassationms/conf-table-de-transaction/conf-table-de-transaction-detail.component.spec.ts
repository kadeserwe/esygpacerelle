import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfTableDeTransactionDetailComponent } from 'app/entities/planpassationms/conf-table-de-transaction/conf-table-de-transaction-detail.component';
import { ConfTableDeTransaction } from 'app/shared/model/planpassationms/conf-table-de-transaction.model';

describe('Component Tests', () => {
  describe('ConfTableDeTransaction Management Detail Component', () => {
    let comp: ConfTableDeTransactionDetailComponent;
    let fixture: ComponentFixture<ConfTableDeTransactionDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ confTableDeTransaction: new ConfTableDeTransaction(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfTableDeTransactionDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ConfTableDeTransactionDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ConfTableDeTransactionDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load confTableDeTransaction on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.confTableDeTransaction).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
