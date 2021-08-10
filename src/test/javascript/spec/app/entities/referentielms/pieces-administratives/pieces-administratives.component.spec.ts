import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PiecesAdministrativesComponent } from 'app/entities/referentielms/pieces-administratives/pieces-administratives.component';
import { PiecesAdministrativesService } from 'app/entities/referentielms/pieces-administratives/pieces-administratives.service';
import { PiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';

describe('Component Tests', () => {
  describe('PiecesAdministratives Management Component', () => {
    let comp: PiecesAdministrativesComponent;
    let fixture: ComponentFixture<PiecesAdministrativesComponent>;
    let service: PiecesAdministrativesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesAdministrativesComponent],
      })
        .overrideTemplate(PiecesAdministrativesComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PiecesAdministrativesComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PiecesAdministrativesService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new PiecesAdministratives(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.piecesAdministratives && comp.piecesAdministratives[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
