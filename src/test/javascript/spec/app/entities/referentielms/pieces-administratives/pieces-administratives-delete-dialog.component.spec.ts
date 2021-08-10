import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MockEventManager } from '../../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../../helpers/mock-active-modal.service';
import { PiecesAdministrativesDeleteDialogComponent } from 'app/entities/referentielms/pieces-administratives/pieces-administratives-delete-dialog.component';
import { PiecesAdministrativesService } from 'app/entities/referentielms/pieces-administratives/pieces-administratives.service';

describe('Component Tests', () => {
  describe('PiecesAdministratives Management Delete Component', () => {
    let comp: PiecesAdministrativesDeleteDialogComponent;
    let fixture: ComponentFixture<PiecesAdministrativesDeleteDialogComponent>;
    let service: PiecesAdministrativesService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesAdministrativesDeleteDialogComponent],
      })
        .overrideTemplate(PiecesAdministrativesDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PiecesAdministrativesDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PiecesAdministrativesService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
