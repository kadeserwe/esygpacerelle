import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MockEventManager } from '../../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../../helpers/mock-active-modal.service';
import { CategorieFournisseurDeleteDialogComponent } from 'app/entities/referentielms/categorie-fournisseur/categorie-fournisseur-delete-dialog.component';
import { CategorieFournisseurService } from 'app/entities/referentielms/categorie-fournisseur/categorie-fournisseur.service';

describe('Component Tests', () => {
  describe('CategorieFournisseur Management Delete Component', () => {
    let comp: CategorieFournisseurDeleteDialogComponent;
    let fixture: ComponentFixture<CategorieFournisseurDeleteDialogComponent>;
    let service: CategorieFournisseurService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CategorieFournisseurDeleteDialogComponent],
      })
        .overrideTemplate(CategorieFournisseurDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CategorieFournisseurDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CategorieFournisseurService);
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
