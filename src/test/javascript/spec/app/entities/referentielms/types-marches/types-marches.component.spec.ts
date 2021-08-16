import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { TypesMarchesComponent } from 'app/entities/referentielms/types-marches/types-marches.component';
import { TypesMarchesService } from 'app/entities/referentielms/types-marches/types-marches.service';
import { TypesMarches } from 'app/shared/model/referentielms/types-marches.model';

describe('Component Tests', () => {
  describe('TypesMarches Management Component', () => {
    let comp: TypesMarchesComponent;
    let fixture: ComponentFixture<TypesMarchesComponent>;
    let service: TypesMarchesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [TypesMarchesComponent],
      })
        .overrideTemplate(TypesMarchesComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TypesMarchesComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TypesMarchesService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new TypesMarches(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.typesMarches && comp.typesMarches[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
