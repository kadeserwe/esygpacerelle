import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { GroupesImputationDetailComponent } from 'app/entities/referentielms/groupes-imputation/groupes-imputation-detail.component';
import { GroupesImputation } from 'app/shared/model/referentielms/groupes-imputation.model';

describe('Component Tests', () => {
  describe('GroupesImputation Management Detail Component', () => {
    let comp: GroupesImputationDetailComponent;
    let fixture: ComponentFixture<GroupesImputationDetailComponent>;
    const route = ({ data: of({ groupesImputation: new GroupesImputation(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [GroupesImputationDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(GroupesImputationDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(GroupesImputationDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load groupesImputation on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.groupesImputation).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
