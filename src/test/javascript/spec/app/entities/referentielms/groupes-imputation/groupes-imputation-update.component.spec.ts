import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { GroupesImputationUpdateComponent } from 'app/entities/referentielms/groupes-imputation/groupes-imputation-update.component';
import { GroupesImputationService } from 'app/entities/referentielms/groupes-imputation/groupes-imputation.service';
import { GroupesImputation } from 'app/shared/model/referentielms/groupes-imputation.model';

describe('Component Tests', () => {
  describe('GroupesImputation Management Update Component', () => {
    let comp: GroupesImputationUpdateComponent;
    let fixture: ComponentFixture<GroupesImputationUpdateComponent>;
    let service: GroupesImputationService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [GroupesImputationUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(GroupesImputationUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(GroupesImputationUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GroupesImputationService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new GroupesImputation(123);
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
        const entity = new GroupesImputation();
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
