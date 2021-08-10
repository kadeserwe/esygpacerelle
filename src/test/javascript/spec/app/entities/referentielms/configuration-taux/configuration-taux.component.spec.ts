import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfigurationTauxComponent } from 'app/entities/referentielms/configuration-taux/configuration-taux.component';
import { ConfigurationTauxService } from 'app/entities/referentielms/configuration-taux/configuration-taux.service';
import { ConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';

describe('Component Tests', () => {
  describe('ConfigurationTaux Management Component', () => {
    let comp: ConfigurationTauxComponent;
    let fixture: ComponentFixture<ConfigurationTauxComponent>;
    let service: ConfigurationTauxService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfigurationTauxComponent],
      })
        .overrideTemplate(ConfigurationTauxComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ConfigurationTauxComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ConfigurationTauxService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new ConfigurationTaux(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.configurationTauxes && comp.configurationTauxes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
