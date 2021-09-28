import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SygAutoriteContractanteDetailComponent } from 'app/entities/referentielms/syg-autorite-contractante/syg-autorite-contractante-detail.component';
import { SygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';

describe('Component Tests', () => {
  describe('SygAutoriteContractante Management Detail Component', () => {
    let comp: SygAutoriteContractanteDetailComponent;
    let fixture: ComponentFixture<SygAutoriteContractanteDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ sygAutoriteContractante: new SygAutoriteContractante(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SygAutoriteContractanteDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SygAutoriteContractanteDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SygAutoriteContractanteDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load sygAutoriteContractante on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.sygAutoriteContractante).toEqual(jasmine.objectContaining({ id: 123 }));
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
