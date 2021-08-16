import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SpecialitesPersonnelUpdateComponent } from 'app/entities/referentielms/specialites-personnel/specialites-personnel-update.component';
import { SpecialitesPersonnelService } from 'app/entities/referentielms/specialites-personnel/specialites-personnel.service';
import { SpecialitesPersonnel } from 'app/shared/model/referentielms/specialites-personnel.model';

describe('Component Tests', () => {
  describe('SpecialitesPersonnel Management Update Component', () => {
    let comp: SpecialitesPersonnelUpdateComponent;
    let fixture: ComponentFixture<SpecialitesPersonnelUpdateComponent>;
    let service: SpecialitesPersonnelService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SpecialitesPersonnelUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(SpecialitesPersonnelUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SpecialitesPersonnelUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SpecialitesPersonnelService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new SpecialitesPersonnel(123);
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
        const entity = new SpecialitesPersonnel();
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
