import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SygAutoriteContractanteComponent } from 'app/entities/referentielms/syg-autorite-contractante/syg-autorite-contractante.component';
import { SygAutoriteContractanteService } from 'app/entities/referentielms/syg-autorite-contractante/syg-autorite-contractante.service';
import { SygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';

describe('Component Tests', () => {
  describe('SygAutoriteContractante Management Component', () => {
    let comp: SygAutoriteContractanteComponent;
    let fixture: ComponentFixture<SygAutoriteContractanteComponent>;
    let service: SygAutoriteContractanteService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SygAutoriteContractanteComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              data: of({
                defaultSort: 'id,asc',
              }),
              queryParamMap: of(
                convertToParamMap({
                  page: '1',
                  size: '1',
                  sort: 'id,desc',
                })
              ),
            },
          },
        ],
      })
        .overrideTemplate(SygAutoriteContractanteComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SygAutoriteContractanteComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SygAutoriteContractanteService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new SygAutoriteContractante(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.sygAutoriteContractantes && comp.sygAutoriteContractantes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new SygAutoriteContractante(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.sygAutoriteContractantes && comp.sygAutoriteContractantes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      comp.ngOnInit();
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // INIT
      comp.ngOnInit();

      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });
  });
});
