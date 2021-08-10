import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CriteresQualificationUpdateComponent } from 'app/entities/referentielms/criteres-qualification/criteres-qualification-update.component';
import { CriteresQualificationService } from 'app/entities/referentielms/criteres-qualification/criteres-qualification.service';
import { CriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';

describe('Component Tests', () => {
  describe('CriteresQualification Management Update Component', () => {
    let comp: CriteresQualificationUpdateComponent;
    let fixture: ComponentFixture<CriteresQualificationUpdateComponent>;
    let service: CriteresQualificationService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CriteresQualificationUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CriteresQualificationUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CriteresQualificationUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CriteresQualificationService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CriteresQualification(123);
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
        const entity = new CriteresQualification();
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
