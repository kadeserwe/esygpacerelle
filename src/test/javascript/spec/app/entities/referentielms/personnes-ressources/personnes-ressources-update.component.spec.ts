import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PersonnesRessourcesUpdateComponent } from 'app/entities/referentielms/personnes-ressources/personnes-ressources-update.component';
import { PersonnesRessourcesService } from 'app/entities/referentielms/personnes-ressources/personnes-ressources.service';
import { PersonnesRessources } from 'app/shared/model/referentielms/personnes-ressources.model';

describe('Component Tests', () => {
  describe('PersonnesRessources Management Update Component', () => {
    let comp: PersonnesRessourcesUpdateComponent;
    let fixture: ComponentFixture<PersonnesRessourcesUpdateComponent>;
    let service: PersonnesRessourcesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PersonnesRessourcesUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(PersonnesRessourcesUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PersonnesRessourcesUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PersonnesRessourcesService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PersonnesRessources(123);
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
        const entity = new PersonnesRessources();
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
