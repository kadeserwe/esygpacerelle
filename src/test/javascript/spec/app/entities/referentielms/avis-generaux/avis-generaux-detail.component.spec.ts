import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AvisGenerauxDetailComponent } from 'app/entities/referentielms/avis-generaux/avis-generaux-detail.component';
import { AvisGeneraux } from 'app/shared/model/referentielms/avis-generaux.model';

describe('Component Tests', () => {
  describe('AvisGeneraux Management Detail Component', () => {
    let comp: AvisGenerauxDetailComponent;
    let fixture: ComponentFixture<AvisGenerauxDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ avisGeneraux: new AvisGeneraux(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AvisGenerauxDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(AvisGenerauxDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AvisGenerauxDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load avisGeneraux on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.avisGeneraux).toEqual(jasmine.objectContaining({ id: 123 }));
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
