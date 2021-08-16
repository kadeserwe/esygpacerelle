import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { JoursFeriesUpdateComponent } from 'app/entities/referentielms/jours-feries/jours-feries-update.component';
import { JoursFeriesService } from 'app/entities/referentielms/jours-feries/jours-feries.service';
import { JoursFeries } from 'app/shared/model/referentielms/jours-feries.model';

describe('Component Tests', () => {
  describe('JoursFeries Management Update Component', () => {
    let comp: JoursFeriesUpdateComponent;
    let fixture: ComponentFixture<JoursFeriesUpdateComponent>;
    let service: JoursFeriesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [JoursFeriesUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(JoursFeriesUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(JoursFeriesUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(JoursFeriesService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new JoursFeries(123);
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
        const entity = new JoursFeries();
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
