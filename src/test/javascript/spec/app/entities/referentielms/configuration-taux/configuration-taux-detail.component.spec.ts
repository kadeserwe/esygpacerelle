import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfigurationTauxDetailComponent } from 'app/entities/referentielms/configuration-taux/configuration-taux-detail.component';
import { ConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';

describe('Component Tests', () => {
  describe('ConfigurationTaux Management Detail Component', () => {
    let comp: ConfigurationTauxDetailComponent;
    let fixture: ComponentFixture<ConfigurationTauxDetailComponent>;
    const route = ({ data: of({ configurationTaux: new ConfigurationTaux(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfigurationTauxDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ConfigurationTauxDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ConfigurationTauxDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load configurationTaux on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.configurationTaux).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
