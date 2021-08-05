import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SygRealisationUpdateComponent } from 'app/entities/planpassationms/syg-realisation/syg-realisation-update.component';
import { SygRealisationService } from 'app/entities/planpassationms/syg-realisation/syg-realisation.service';
import { SygRealisation } from 'app/shared/model/planpassationms/syg-realisation.model';

describe('Component Tests', () => {
  describe('SygRealisation Management Update Component', () => {
    let comp: SygRealisationUpdateComponent;
    let fixture: ComponentFixture<SygRealisationUpdateComponent>;
    let service: SygRealisationService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SygRealisationUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(SygRealisationUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SygRealisationUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SygRealisationService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new SygRealisation(123);
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
        const entity = new SygRealisation();
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
