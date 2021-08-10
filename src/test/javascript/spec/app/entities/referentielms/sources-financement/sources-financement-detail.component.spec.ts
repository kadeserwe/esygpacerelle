import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SourcesFinancementDetailComponent } from 'app/entities/referentielms/sources-financement/sources-financement-detail.component';
import { SourcesFinancement } from 'app/shared/model/referentielms/sources-financement.model';

describe('Component Tests', () => {
  describe('SourcesFinancement Management Detail Component', () => {
    let comp: SourcesFinancementDetailComponent;
    let fixture: ComponentFixture<SourcesFinancementDetailComponent>;
    const route = ({ data: of({ sourcesFinancement: new SourcesFinancement(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SourcesFinancementDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SourcesFinancementDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SourcesFinancementDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load sourcesFinancement on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.sourcesFinancement).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
