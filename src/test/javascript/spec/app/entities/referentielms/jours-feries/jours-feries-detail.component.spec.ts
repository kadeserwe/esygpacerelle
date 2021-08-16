import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { JoursFeriesDetailComponent } from 'app/entities/referentielms/jours-feries/jours-feries-detail.component';
import { JoursFeries } from 'app/shared/model/referentielms/jours-feries.model';

describe('Component Tests', () => {
  describe('JoursFeries Management Detail Component', () => {
    let comp: JoursFeriesDetailComponent;
    let fixture: ComponentFixture<JoursFeriesDetailComponent>;
    const route = ({ data: of({ joursFeries: new JoursFeries(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [JoursFeriesDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(JoursFeriesDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(JoursFeriesDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load joursFeries on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.joursFeries).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
