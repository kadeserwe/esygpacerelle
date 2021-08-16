import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { TypesMarchesUpdateComponent } from 'app/entities/referentielms/types-marches/types-marches-update.component';
import { TypesMarchesService } from 'app/entities/referentielms/types-marches/types-marches.service';
import { TypesMarches } from 'app/shared/model/referentielms/types-marches.model';

describe('Component Tests', () => {
  describe('TypesMarches Management Update Component', () => {
    let comp: TypesMarchesUpdateComponent;
    let fixture: ComponentFixture<TypesMarchesUpdateComponent>;
    let service: TypesMarchesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [TypesMarchesUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(TypesMarchesUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TypesMarchesUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TypesMarchesService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new TypesMarches(123);
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
        const entity = new TypesMarches();
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
