import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PiecesAdministrativesUpdateComponent } from 'app/entities/referentielms/pieces-administratives/pieces-administratives-update.component';
import { PiecesAdministrativesService } from 'app/entities/referentielms/pieces-administratives/pieces-administratives.service';
import { PiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';

describe('Component Tests', () => {
  describe('PiecesAdministratives Management Update Component', () => {
    let comp: PiecesAdministrativesUpdateComponent;
    let fixture: ComponentFixture<PiecesAdministrativesUpdateComponent>;
    let service: PiecesAdministrativesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesAdministrativesUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(PiecesAdministrativesUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PiecesAdministrativesUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PiecesAdministrativesService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PiecesAdministratives(123);
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
        const entity = new PiecesAdministratives();
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
