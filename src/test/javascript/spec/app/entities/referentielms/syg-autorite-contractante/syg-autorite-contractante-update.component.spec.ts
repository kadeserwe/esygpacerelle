import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SygAutoriteContractanteUpdateComponent } from 'app/entities/referentielms/syg-autorite-contractante/syg-autorite-contractante-update.component';
import { SygAutoriteContractanteService } from 'app/entities/referentielms/syg-autorite-contractante/syg-autorite-contractante.service';
import { SygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';

describe('Component Tests', () => {
  describe('SygAutoriteContractante Management Update Component', () => {
    let comp: SygAutoriteContractanteUpdateComponent;
    let fixture: ComponentFixture<SygAutoriteContractanteUpdateComponent>;
    let service: SygAutoriteContractanteService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SygAutoriteContractanteUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(SygAutoriteContractanteUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SygAutoriteContractanteUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SygAutoriteContractanteService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new SygAutoriteContractante(123);
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
        const entity = new SygAutoriteContractante();
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
