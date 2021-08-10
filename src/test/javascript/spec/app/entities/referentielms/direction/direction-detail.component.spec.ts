import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DirectionDetailComponent } from 'app/entities/referentielms/direction/direction-detail.component';
import { Direction } from 'app/shared/model/referentielms/direction.model';

describe('Component Tests', () => {
  describe('Direction Management Detail Component', () => {
    let comp: DirectionDetailComponent;
    let fixture: ComponentFixture<DirectionDetailComponent>;
    const route = ({ data: of({ direction: new Direction(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DirectionDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DirectionDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DirectionDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load direction on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.direction).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
