import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PiecesAdministrativesDetailComponent } from 'app/entities/referentielms/pieces-administratives/pieces-administratives-detail.component';
import { PiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';

describe('Component Tests', () => {
  describe('PiecesAdministratives Management Detail Component', () => {
    let comp: PiecesAdministrativesDetailComponent;
    let fixture: ComponentFixture<PiecesAdministrativesDetailComponent>;
    const route = ({ data: of({ piecesAdministratives: new PiecesAdministratives(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesAdministrativesDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(PiecesAdministrativesDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PiecesAdministrativesDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load piecesAdministratives on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.piecesAdministratives).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
