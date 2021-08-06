import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ModeSelectionDetailComponent } from 'app/entities/referentielms/mode-selection/mode-selection-detail.component';
import { ModeSelection } from 'app/shared/model/referentielms/mode-selection.model';

describe('Component Tests', () => {
  describe('ModeSelection Management Detail Component', () => {
    let comp: ModeSelectionDetailComponent;
    let fixture: ComponentFixture<ModeSelectionDetailComponent>;
    const route = ({ data: of({ modeSelection: new ModeSelection(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ModeSelectionDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ModeSelectionDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ModeSelectionDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load modeSelection on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.modeSelection).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
