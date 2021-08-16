import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SpecialitesPersonnelDetailComponent } from 'app/entities/referentielms/specialites-personnel/specialites-personnel-detail.component';
import { SpecialitesPersonnel } from 'app/shared/model/referentielms/specialites-personnel.model';

describe('Component Tests', () => {
  describe('SpecialitesPersonnel Management Detail Component', () => {
    let comp: SpecialitesPersonnelDetailComponent;
    let fixture: ComponentFixture<SpecialitesPersonnelDetailComponent>;
    const route = ({ data: of({ specialitesPersonnel: new SpecialitesPersonnel(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SpecialitesPersonnelDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SpecialitesPersonnelDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SpecialitesPersonnelDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load specialitesPersonnel on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.specialitesPersonnel).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
