import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CriteresQualificationDetailComponent } from 'app/entities/referentielms/criteres-qualification/criteres-qualification-detail.component';
import { CriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';

describe('Component Tests', () => {
  describe('CriteresQualification Management Detail Component', () => {
    let comp: CriteresQualificationDetailComponent;
    let fixture: ComponentFixture<CriteresQualificationDetailComponent>;
    const route = ({ data: of({ criteresQualification: new CriteresQualification(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CriteresQualificationDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CriteresQualificationDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CriteresQualificationDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load criteresQualification on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.criteresQualification).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
