import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DelaisUpdateComponent } from 'app/entities/referentielms/delais/delais-update.component';
import { DelaisService } from 'app/entities/referentielms/delais/delais.service';
import { Delais } from 'app/shared/model/referentielms/delais.model';

describe('Component Tests', () => {
  describe('Delais Management Update Component', () => {
    let comp: DelaisUpdateComponent;
    let fixture: ComponentFixture<DelaisUpdateComponent>;
    let service: DelaisService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DelaisUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DelaisUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DelaisUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DelaisService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Delais(123);
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
        const entity = new Delais();
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
