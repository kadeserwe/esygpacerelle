import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { BanqueDetailComponent } from 'app/entities/referentielms/banque/banque-detail.component';
import { Banque } from 'app/shared/model/referentielms/banque.model';

describe('Component Tests', () => {
  describe('Banque Management Detail Component', () => {
    let comp: BanqueDetailComponent;
    let fixture: ComponentFixture<BanqueDetailComponent>;
    const route = ({ data: of({ banque: new Banque(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [BanqueDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(BanqueDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(BanqueDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load banque on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.banque).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
