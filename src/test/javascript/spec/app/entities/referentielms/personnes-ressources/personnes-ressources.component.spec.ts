import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PersonnesRessourcesComponent } from 'app/entities/referentielms/personnes-ressources/personnes-ressources.component';
import { PersonnesRessourcesService } from 'app/entities/referentielms/personnes-ressources/personnes-ressources.service';
import { PersonnesRessources } from 'app/shared/model/referentielms/personnes-ressources.model';

describe('Component Tests', () => {
  describe('PersonnesRessources Management Component', () => {
    let comp: PersonnesRessourcesComponent;
    let fixture: ComponentFixture<PersonnesRessourcesComponent>;
    let service: PersonnesRessourcesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PersonnesRessourcesComponent],
      })
        .overrideTemplate(PersonnesRessourcesComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PersonnesRessourcesComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PersonnesRessourcesService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new PersonnesRessources(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.personnesRessources && comp.personnesRessources[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
