import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { HierarchieUpdateComponent } from 'app/entities/referentielms/hierarchie/hierarchie-update.component';
import { HierarchieService } from 'app/entities/referentielms/hierarchie/hierarchie.service';
import { Hierarchie } from 'app/shared/model/referentielms/hierarchie.model';

describe('Component Tests', () => {
  describe('Hierarchie Management Update Component', () => {
    let comp: HierarchieUpdateComponent;
    let fixture: ComponentFixture<HierarchieUpdateComponent>;
    let service: HierarchieService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [HierarchieUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(HierarchieUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(HierarchieUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(HierarchieService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Hierarchie(123);
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
        const entity = new Hierarchie();
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
