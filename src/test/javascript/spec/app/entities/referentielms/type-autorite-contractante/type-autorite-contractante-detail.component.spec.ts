import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { TypeAutoriteContractanteDetailComponent } from 'app/entities/referentielms/type-autorite-contractante/type-autorite-contractante-detail.component';
import { TypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';

describe('Component Tests', () => {
  describe('TypeAutoriteContractante Management Detail Component', () => {
    let comp: TypeAutoriteContractanteDetailComponent;
    let fixture: ComponentFixture<TypeAutoriteContractanteDetailComponent>;
    const route = ({ data: of({ typeAutoriteContractante: new TypeAutoriteContractante(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [TypeAutoriteContractanteDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(TypeAutoriteContractanteDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TypeAutoriteContractanteDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load typeAutoriteContractante on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.typeAutoriteContractante).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
