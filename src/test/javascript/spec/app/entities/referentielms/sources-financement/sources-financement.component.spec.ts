import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SourcesFinancementComponent } from 'app/entities/referentielms/sources-financement/sources-financement.component';
import { SourcesFinancementService } from 'app/entities/referentielms/sources-financement/sources-financement.service';
import { SourcesFinancement } from 'app/shared/model/referentielms/sources-financement.model';

describe('Component Tests', () => {
  describe('SourcesFinancement Management Component', () => {
    let comp: SourcesFinancementComponent;
    let fixture: ComponentFixture<SourcesFinancementComponent>;
    let service: SourcesFinancementService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SourcesFinancementComponent],
      })
        .overrideTemplate(SourcesFinancementComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SourcesFinancementComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SourcesFinancementService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new SourcesFinancement(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.sourcesFinancements && comp.sourcesFinancements[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
