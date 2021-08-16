import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { NaturesGarantieUpdateComponent } from 'app/entities/referentielms/natures-garantie/natures-garantie-update.component';
import { NaturesGarantieService } from 'app/entities/referentielms/natures-garantie/natures-garantie.service';
import { NaturesGarantie } from 'app/shared/model/referentielms/natures-garantie.model';

describe('Component Tests', () => {
  describe('NaturesGarantie Management Update Component', () => {
    let comp: NaturesGarantieUpdateComponent;
    let fixture: ComponentFixture<NaturesGarantieUpdateComponent>;
    let service: NaturesGarantieService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [NaturesGarantieUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(NaturesGarantieUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(NaturesGarantieUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(NaturesGarantieService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new NaturesGarantie(123);
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
        const entity = new NaturesGarantie();
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
