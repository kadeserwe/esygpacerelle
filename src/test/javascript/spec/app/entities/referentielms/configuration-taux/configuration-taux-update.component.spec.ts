import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfigurationTauxUpdateComponent } from 'app/entities/referentielms/configuration-taux/configuration-taux-update.component';
import { ConfigurationTauxService } from 'app/entities/referentielms/configuration-taux/configuration-taux.service';
import { ConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';

describe('Component Tests', () => {
  describe('ConfigurationTaux Management Update Component', () => {
    let comp: ConfigurationTauxUpdateComponent;
    let fixture: ComponentFixture<ConfigurationTauxUpdateComponent>;
    let service: ConfigurationTauxService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfigurationTauxUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ConfigurationTauxUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ConfigurationTauxUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ConfigurationTauxService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ConfigurationTaux(123);
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
        const entity = new ConfigurationTaux();
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
