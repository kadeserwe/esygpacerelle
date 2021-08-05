import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfSequanceGeneratorUpdateComponent } from 'app/entities/planpassationms/conf-sequance-generator/conf-sequance-generator-update.component';
import { ConfSequanceGeneratorService } from 'app/entities/planpassationms/conf-sequance-generator/conf-sequance-generator.service';
import { ConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';

describe('Component Tests', () => {
  describe('ConfSequanceGenerator Management Update Component', () => {
    let comp: ConfSequanceGeneratorUpdateComponent;
    let fixture: ComponentFixture<ConfSequanceGeneratorUpdateComponent>;
    let service: ConfSequanceGeneratorService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfSequanceGeneratorUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ConfSequanceGeneratorUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ConfSequanceGeneratorUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ConfSequanceGeneratorService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ConfSequanceGenerator(123);
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
        const entity = new ConfSequanceGenerator();
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
