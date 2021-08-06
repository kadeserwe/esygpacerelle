import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { TypeAutoriteContractanteUpdateComponent } from 'app/entities/referentielms/type-autorite-contractante/type-autorite-contractante-update.component';
import { TypeAutoriteContractanteService } from 'app/entities/referentielms/type-autorite-contractante/type-autorite-contractante.service';
import { TypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';

describe('Component Tests', () => {
  describe('TypeAutoriteContractante Management Update Component', () => {
    let comp: TypeAutoriteContractanteUpdateComponent;
    let fixture: ComponentFixture<TypeAutoriteContractanteUpdateComponent>;
    let service: TypeAutoriteContractanteService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [TypeAutoriteContractanteUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(TypeAutoriteContractanteUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TypeAutoriteContractanteUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TypeAutoriteContractanteService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new TypeAutoriteContractante(123);
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
        const entity = new TypeAutoriteContractante();
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
