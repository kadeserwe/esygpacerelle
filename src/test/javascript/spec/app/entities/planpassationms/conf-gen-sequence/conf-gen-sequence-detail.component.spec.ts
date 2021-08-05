import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfGenSequenceDetailComponent } from 'app/entities/planpassationms/conf-gen-sequence/conf-gen-sequence-detail.component';
import { ConfGenSequence } from 'app/shared/model/planpassationms/conf-gen-sequence.model';

describe('Component Tests', () => {
  describe('ConfGenSequence Management Detail Component', () => {
    let comp: ConfGenSequenceDetailComponent;
    let fixture: ComponentFixture<ConfGenSequenceDetailComponent>;
    const route = ({ data: of({ confGenSequence: new ConfGenSequence(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfGenSequenceDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ConfGenSequenceDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ConfGenSequenceDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load confGenSequence on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.confGenSequence).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
