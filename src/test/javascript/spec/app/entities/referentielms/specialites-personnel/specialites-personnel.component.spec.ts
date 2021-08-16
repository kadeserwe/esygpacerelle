import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { SpecialitesPersonnelComponent } from 'app/entities/referentielms/specialites-personnel/specialites-personnel.component';
import { SpecialitesPersonnelService } from 'app/entities/referentielms/specialites-personnel/specialites-personnel.service';
import { SpecialitesPersonnel } from 'app/shared/model/referentielms/specialites-personnel.model';

describe('Component Tests', () => {
  describe('SpecialitesPersonnel Management Component', () => {
    let comp: SpecialitesPersonnelComponent;
    let fixture: ComponentFixture<SpecialitesPersonnelComponent>;
    let service: SpecialitesPersonnelService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [SpecialitesPersonnelComponent],
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
        .overrideTemplate(SpecialitesPersonnelComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SpecialitesPersonnelComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SpecialitesPersonnelService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new SpecialitesPersonnel(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.specialitesPersonnels && comp.specialitesPersonnels[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new SpecialitesPersonnel(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.specialitesPersonnels && comp.specialitesPersonnels[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
