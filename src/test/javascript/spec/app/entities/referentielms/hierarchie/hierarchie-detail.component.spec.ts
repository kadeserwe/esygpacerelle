import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { HierarchieDetailComponent } from 'app/entities/referentielms/hierarchie/hierarchie-detail.component';
import { Hierarchie } from 'app/shared/model/referentielms/hierarchie.model';

describe('Component Tests', () => {
  describe('Hierarchie Management Detail Component', () => {
    let comp: HierarchieDetailComponent;
    let fixture: ComponentFixture<HierarchieDetailComponent>;
    const route = ({ data: of({ hierarchie: new Hierarchie(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [HierarchieDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(HierarchieDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(HierarchieDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load hierarchie on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.hierarchie).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
