import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ModeSelectionUpdateComponent } from 'app/entities/referentielms/mode-selection/mode-selection-update.component';
import { ModeSelectionService } from 'app/entities/referentielms/mode-selection/mode-selection.service';
import { ModeSelection } from 'app/shared/model/referentielms/mode-selection.model';

describe('Component Tests', () => {
  describe('ModeSelection Management Update Component', () => {
    let comp: ModeSelectionUpdateComponent;
    let fixture: ComponentFixture<ModeSelectionUpdateComponent>;
    let service: ModeSelectionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ModeSelectionUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ModeSelectionUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ModeSelectionUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ModeSelectionService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ModeSelection(123);
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
        const entity = new ModeSelection();
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
