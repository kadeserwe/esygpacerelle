import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfSequanceGeneratorDetailComponent } from 'app/entities/planpassationms/conf-sequance-generator/conf-sequance-generator-detail.component';
import { ConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';

describe('Component Tests', () => {
  describe('ConfSequanceGenerator Management Detail Component', () => {
    let comp: ConfSequanceGeneratorDetailComponent;
    let fixture: ComponentFixture<ConfSequanceGeneratorDetailComponent>;
    const route = ({ data: of({ confSequanceGenerator: new ConfSequanceGenerator(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfSequanceGeneratorDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ConfSequanceGeneratorDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ConfSequanceGeneratorDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load confSequanceGenerator on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.confSequanceGenerator).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
