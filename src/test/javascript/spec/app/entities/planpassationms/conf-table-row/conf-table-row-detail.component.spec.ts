import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfTableRowDetailComponent } from 'app/entities/planpassationms/conf-table-row/conf-table-row-detail.component';
import { ConfTableRow } from 'app/shared/model/planpassationms/conf-table-row.model';

describe('Component Tests', () => {
  describe('ConfTableRow Management Detail Component', () => {
    let comp: ConfTableRowDetailComponent;
    let fixture: ComponentFixture<ConfTableRowDetailComponent>;
    const route = ({ data: of({ confTableRow: new ConfTableRow(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfTableRowDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ConfTableRowDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ConfTableRowDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load confTableRow on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.confTableRow).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
