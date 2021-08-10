import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SourcesFinancementUpdateComponent } from 'app/entities/referentielms/sources-financement/sources-financement-update.component';
import { SourcesFinancementService } from 'app/entities/referentielms/sources-financement/sources-financement.service';
import { SourcesFinancement } from 'app/shared/model/referentielms/sources-financement.model';

describe('Component Tests', () => {
  describe('SourcesFinancement Management Update Component', () => {
    let comp: SourcesFinancementUpdateComponent;
    let fixture: ComponentFixture<SourcesFinancementUpdateComponent>;
    let service: SourcesFinancementService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SourcesFinancementUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(SourcesFinancementUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SourcesFinancementUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SourcesFinancementService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new SourcesFinancement(123);
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
        const entity = new SourcesFinancement();
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
