import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SygRealisationDetailComponent } from 'app/entities/planpassationms/syg-realisation/syg-realisation-detail.component';
import { SygRealisation } from 'app/shared/model/planpassationms/syg-realisation.model';

describe('Component Tests', () => {
  describe('SygRealisation Management Detail Component', () => {
    let comp: SygRealisationDetailComponent;
    let fixture: ComponentFixture<SygRealisationDetailComponent>;
    const route = ({ data: of({ sygRealisation: new SygRealisation(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SygRealisationDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SygRealisationDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SygRealisationDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load sygRealisation on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.sygRealisation).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
