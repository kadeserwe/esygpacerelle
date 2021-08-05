import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfTableRowUpdateComponent } from 'app/entities/planpassationms/conf-table-row/conf-table-row-update.component';
import { ConfTableRowService } from 'app/entities/planpassationms/conf-table-row/conf-table-row.service';
import { ConfTableRow } from 'app/shared/model/planpassationms/conf-table-row.model';

describe('Component Tests', () => {
  describe('ConfTableRow Management Update Component', () => {
    let comp: ConfTableRowUpdateComponent;
    let fixture: ComponentFixture<ConfTableRowUpdateComponent>;
    let service: ConfTableRowService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfTableRowUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ConfTableRowUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ConfTableRowUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ConfTableRowService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ConfTableRow(123);
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
        const entity = new ConfTableRow();
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
