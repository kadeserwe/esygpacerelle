import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { FournisseurDetailComponent } from 'app/entities/referentielms/fournisseur/fournisseur-detail.component';
import { Fournisseur } from 'app/shared/model/referentielms/fournisseur.model';

describe('Component Tests', () => {
  describe('Fournisseur Management Detail Component', () => {
    let comp: FournisseurDetailComponent;
    let fixture: ComponentFixture<FournisseurDetailComponent>;
    const route = ({ data: of({ fournisseur: new Fournisseur(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [FournisseurDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(FournisseurDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(FournisseurDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load fournisseur on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.fournisseur).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
