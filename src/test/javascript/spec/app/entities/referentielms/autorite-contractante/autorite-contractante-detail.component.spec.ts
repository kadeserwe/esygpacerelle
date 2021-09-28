import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AutoriteContractanteDetailComponent } from 'app/entities/referentielms/autorite-contractante/autorite-contractante-detail.component';
import { AutoriteContractante } from 'app/shared/model/referentielms/autorite-contractante.model';

describe('Component Tests', () => {
  describe('AutoriteContractante Management Detail Component', () => {
    let comp: AutoriteContractanteDetailComponent;
    let fixture: ComponentFixture<AutoriteContractanteDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ autoriteContractante: new AutoriteContractante(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AutoriteContractanteDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(AutoriteContractanteDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AutoriteContractanteDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load autoriteContractante on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.autoriteContractante).toEqual(jasmine.objectContaining({ id: 123 }));
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
