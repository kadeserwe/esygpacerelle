import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DelaisDetailComponent } from 'app/entities/referentielms/delais/delais-detail.component';
import { Delais } from 'app/shared/model/referentielms/delais.model';

describe('Component Tests', () => {
  describe('Delais Management Detail Component', () => {
    let comp: DelaisDetailComponent;
    let fixture: ComponentFixture<DelaisDetailComponent>;
    const route = ({ data: of({ delais: new Delais(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DelaisDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DelaisDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DelaisDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load delais on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.delais).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
