import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CategorieFournisseurDetailComponent } from 'app/entities/referentielms/categorie-fournisseur/categorie-fournisseur-detail.component';
import { CategorieFournisseur } from 'app/shared/model/referentielms/categorie-fournisseur.model';

describe('Component Tests', () => {
  describe('CategorieFournisseur Management Detail Component', () => {
    let comp: CategorieFournisseurDetailComponent;
    let fixture: ComponentFixture<CategorieFournisseurDetailComponent>;
    const route = ({ data: of({ categorieFournisseur: new CategorieFournisseur(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CategorieFournisseurDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CategorieFournisseurDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CategorieFournisseurDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load categorieFournisseur on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.categorieFournisseur).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
