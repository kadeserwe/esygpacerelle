import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CriteresQualificationComponent } from 'app/entities/referentielms/criteres-qualification/criteres-qualification.component';
import { CriteresQualificationService } from 'app/entities/referentielms/criteres-qualification/criteres-qualification.service';
import { CriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';

describe('Component Tests', () => {
  describe('CriteresQualification Management Component', () => {
    let comp: CriteresQualificationComponent;
    let fixture: ComponentFixture<CriteresQualificationComponent>;
    let service: CriteresQualificationService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CriteresQualificationComponent],
      })
        .overrideTemplate(CriteresQualificationComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CriteresQualificationComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CriteresQualificationService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new CriteresQualification(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.criteresQualifications && comp.criteresQualifications[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
