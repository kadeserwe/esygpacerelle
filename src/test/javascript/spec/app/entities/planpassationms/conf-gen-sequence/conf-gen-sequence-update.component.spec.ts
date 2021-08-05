import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfGenSequenceUpdateComponent } from 'app/entities/planpassationms/conf-gen-sequence/conf-gen-sequence-update.component';
import { ConfGenSequenceService } from 'app/entities/planpassationms/conf-gen-sequence/conf-gen-sequence.service';
import { ConfGenSequence } from 'app/shared/model/planpassationms/conf-gen-sequence.model';

describe('Component Tests', () => {
  describe('ConfGenSequence Management Update Component', () => {
    let comp: ConfGenSequenceUpdateComponent;
    let fixture: ComponentFixture<ConfGenSequenceUpdateComponent>;
    let service: ConfGenSequenceService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfGenSequenceUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ConfGenSequenceUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ConfGenSequenceUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ConfGenSequenceService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ConfGenSequence(123);
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
        const entity = new ConfGenSequence();
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
