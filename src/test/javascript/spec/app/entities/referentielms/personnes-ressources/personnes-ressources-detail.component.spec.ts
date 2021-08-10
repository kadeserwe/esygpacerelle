import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PersonnesRessourcesDetailComponent } from 'app/entities/referentielms/personnes-ressources/personnes-ressources-detail.component';
import { PersonnesRessources } from 'app/shared/model/referentielms/personnes-ressources.model';

describe('Component Tests', () => {
  describe('PersonnesRessources Management Detail Component', () => {
    let comp: PersonnesRessourcesDetailComponent;
    let fixture: ComponentFixture<PersonnesRessourcesDetailComponent>;
    const route = ({ data: of({ personnesRessources: new PersonnesRessources(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PersonnesRessourcesDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(PersonnesRessourcesDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PersonnesRessourcesDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load personnesRessources on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.personnesRessources).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
