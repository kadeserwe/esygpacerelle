import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AvisGenerauxUpdateComponent } from 'app/entities/referentielms/avis-generaux/avis-generaux-update.component';
import { AvisGenerauxService } from 'app/entities/referentielms/avis-generaux/avis-generaux.service';
import { AvisGeneraux } from 'app/shared/model/referentielms/avis-generaux.model';

describe('Component Tests', () => {
  describe('AvisGeneraux Management Update Component', () => {
    let comp: AvisGenerauxUpdateComponent;
    let fixture: ComponentFixture<AvisGenerauxUpdateComponent>;
    let service: AvisGenerauxService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AvisGenerauxUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(AvisGenerauxUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AvisGenerauxUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AvisGenerauxService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new AvisGeneraux(123);
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
        const entity = new AvisGeneraux();
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
