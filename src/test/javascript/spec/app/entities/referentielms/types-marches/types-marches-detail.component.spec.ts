import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { TypesMarchesDetailComponent } from 'app/entities/referentielms/types-marches/types-marches-detail.component';
import { TypesMarches } from 'app/shared/model/referentielms/types-marches.model';

describe('Component Tests', () => {
  describe('TypesMarches Management Detail Component', () => {
    let comp: TypesMarchesDetailComponent;
    let fixture: ComponentFixture<TypesMarchesDetailComponent>;
    const route = ({ data: of({ typesMarches: new TypesMarches(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [TypesMarchesDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(TypesMarchesDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TypesMarchesDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load typesMarches on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.typesMarches).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
