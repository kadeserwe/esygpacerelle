import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ConfSequanceGeneratorComponent } from 'app/entities/planpassationms/conf-sequance-generator/conf-sequance-generator.component';
import { ConfSequanceGeneratorService } from 'app/entities/planpassationms/conf-sequance-generator/conf-sequance-generator.service';
import { ConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';

describe('Component Tests', () => {
  describe('ConfSequanceGenerator Management Component', () => {
    let comp: ConfSequanceGeneratorComponent;
    let fixture: ComponentFixture<ConfSequanceGeneratorComponent>;
    let service: ConfSequanceGeneratorService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ConfSequanceGeneratorComponent],
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
        .overrideTemplate(ConfSequanceGeneratorComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ConfSequanceGeneratorComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ConfSequanceGeneratorService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new ConfSequanceGenerator(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.confSequanceGenerators && comp.confSequanceGenerators[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new ConfSequanceGenerator(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.confSequanceGenerators && comp.confSequanceGenerators[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
