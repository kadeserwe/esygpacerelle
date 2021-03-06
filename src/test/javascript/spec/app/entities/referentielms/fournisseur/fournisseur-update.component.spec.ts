import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { FournisseurUpdateComponent } from 'app/entities/referentielms/fournisseur/fournisseur-update.component';
import { FournisseurService } from 'app/entities/referentielms/fournisseur/fournisseur.service';
import { Fournisseur } from 'app/shared/model/referentielms/fournisseur.model';

describe('Component Tests', () => {
  describe('Fournisseur Management Update Component', () => {
    let comp: FournisseurUpdateComponent;
    let fixture: ComponentFixture<FournisseurUpdateComponent>;
    let service: FournisseurService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [FournisseurUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(FournisseurUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(FournisseurUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(FournisseurService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Fournisseur(123);
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
        const entity = new Fournisseur();
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
