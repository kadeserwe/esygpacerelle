import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { HierarchieComponent } from 'app/entities/referentielms/hierarchie/hierarchie.component';
import { HierarchieService } from 'app/entities/referentielms/hierarchie/hierarchie.service';
import { Hierarchie } from 'app/shared/model/referentielms/hierarchie.model';

describe('Component Tests', () => {
  describe('Hierarchie Management Component', () => {
    let comp: HierarchieComponent;
    let fixture: ComponentFixture<HierarchieComponent>;
    let service: HierarchieService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [HierarchieComponent],
      })
        .overrideTemplate(HierarchieComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(HierarchieComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(HierarchieService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Hierarchie(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.hierarchies && comp.hierarchies[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
