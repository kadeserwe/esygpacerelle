import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { FonctionDetailComponent } from 'app/entities/referentielms/fonction/fonction-detail.component';
import { Fonction } from 'app/shared/model/referentielms/fonction.model';

describe('Component Tests', () => {
  describe('Fonction Management Detail Component', () => {
    let comp: FonctionDetailComponent;
    let fixture: ComponentFixture<FonctionDetailComponent>;
    const route = ({ data: of({ fonction: new Fonction(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [FonctionDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(FonctionDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(FonctionDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load fonction on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.fonction).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
