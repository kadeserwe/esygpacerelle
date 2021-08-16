import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { NaturesGarantieDetailComponent } from 'app/entities/referentielms/natures-garantie/natures-garantie-detail.component';
import { NaturesGarantie } from 'app/shared/model/referentielms/natures-garantie.model';

describe('Component Tests', () => {
  describe('NaturesGarantie Management Detail Component', () => {
    let comp: NaturesGarantieDetailComponent;
    let fixture: ComponentFixture<NaturesGarantieDetailComponent>;
    const route = ({ data: of({ naturesGarantie: new NaturesGarantie(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [NaturesGarantieDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(NaturesGarantieDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(NaturesGarantieDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load naturesGarantie on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.naturesGarantie).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
