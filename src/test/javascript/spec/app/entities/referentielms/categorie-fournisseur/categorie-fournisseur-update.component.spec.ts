import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CategorieFournisseurUpdateComponent } from 'app/entities/referentielms/categorie-fournisseur/categorie-fournisseur-update.component';
import { CategorieFournisseurService } from 'app/entities/referentielms/categorie-fournisseur/categorie-fournisseur.service';
import { CategorieFournisseur } from 'app/shared/model/referentielms/categorie-fournisseur.model';

describe('Component Tests', () => {
  describe('CategorieFournisseur Management Update Component', () => {
    let comp: CategorieFournisseurUpdateComponent;
    let fixture: ComponentFixture<CategorieFournisseurUpdateComponent>;
    let service: CategorieFournisseurService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CategorieFournisseurUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CategorieFournisseurUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CategorieFournisseurUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CategorieFournisseurService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CategorieFournisseur(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new CategorieFournisseur();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
