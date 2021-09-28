import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { ISygAutoriteContractante, SygAutoriteContractante } from 'app/shared/model/referentielms/syg-autorite-contractante.model';
import { SygAutoriteContractanteService } from './syg-autorite-contractante.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { ITypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';
import { TypeAutoriteContractanteService } from 'app/entities/referentielms/type-autorite-contractante/type-autorite-contractante.service';

@Component({
  selector: 'jhi-syg-autorite-contractante-update',
  templateUrl: './syg-autorite-contractante-update.component.html',
})
export class SygAutoriteContractanteUpdateComponent implements OnInit {
  isSaving = false;

  approbationOptions = ['Interne', 'Externe'];
  typeautoritecontractantes: ITypeAutoriteContractante[] = [];

  editForm = this.fb.group({
    id: [],
    ordre: [null, [Validators.required]],
    denomination: [null, [Validators.required]],
    responsable: [null, [Validators.required]],
    adresse: [null, [Validators.required]],
    telephone: [null, [Validators.required]],
    fax: [],
    email: [null, [Validators.required]],
    sigle: [null, [Validators.required]],
    urlsiteweb: [],
    approbation: [],
    logo: [],
    logoContentType: [],
    typeAutoriteContractante: [null, Validators.required],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected sygAutoriteContractanteService: SygAutoriteContractanteService,
    protected typeAutoriteContractanteService: TypeAutoriteContractanteService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sygAutoriteContractante }) => {
      this.updateForm(sygAutoriteContractante);

      this.typeAutoriteContractanteService
        .query()
        .subscribe((res: HttpResponse<ITypeAutoriteContractante[]>) => (this.typeautoritecontractantes = res.body || []));
    });
  }

  updateForm(sygAutoriteContractante: ISygAutoriteContractante): void {
    this.editForm.patchValue({
      id: sygAutoriteContractante.id,
      ordre: sygAutoriteContractante.ordre,
      denomination: sygAutoriteContractante.denomination,
      responsable: sygAutoriteContractante.responsable,
      adresse: sygAutoriteContractante.adresse,
      telephone: sygAutoriteContractante.telephone,
      fax: sygAutoriteContractante.fax,
      email: sygAutoriteContractante.email,
      sigle: sygAutoriteContractante.sigle,
      urlsiteweb: sygAutoriteContractante.urlsiteweb,
      approbation: sygAutoriteContractante.approbation,
      logo: sygAutoriteContractante.logo,
      logoContentType: sygAutoriteContractante.logoContentType,
      typeAutoriteContractante: sygAutoriteContractante.typeAutoriteContractante,
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType: string, base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  setFileData(event: any, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe(null, (err: JhiFileLoadError) => {
      this.eventManager.broadcast(
        new JhiEventWithContent<AlertError>('gatewaysigmapApp.error', { ...err, key: 'error.file.' + err.key })
      );
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (this.elementRef && idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const link = ['autorite-contractante/syg-autorite-contractante'];
    const sygAutoriteContractante = this.createFromForm();
    if (sygAutoriteContractante.id !== undefined) {
      this.subscribeToSaveResponse(this.sygAutoriteContractanteService.update(sygAutoriteContractante));
      this.router.navigate(link);
    } else {
      this.subscribeToSaveResponse(this.sygAutoriteContractanteService.create(sygAutoriteContractante));

      this.router.navigate(link);
    }
  }

  private createFromForm(): ISygAutoriteContractante {
    return {
      ...new SygAutoriteContractante(),
      id: this.editForm.get(['id'])!.value,
      ordre: this.editForm.get(['ordre'])!.value,
      denomination: this.editForm.get(['denomination'])!.value,
      responsable: this.editForm.get(['responsable'])!.value,
      adresse: this.editForm.get(['adresse'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      fax: this.editForm.get(['fax'])!.value,
      email: this.editForm.get(['email'])!.value,
      sigle: this.editForm.get(['sigle'])!.value,
      urlsiteweb: this.editForm.get(['urlsiteweb'])!.value,
      approbation: this.editForm.get(['approbation'])!.value,
      logoContentType: this.editForm.get(['logoContentType'])!.value,
      logo: this.editForm.get(['logo'])!.value,
      typeAutoriteContractante: this.editForm.get(['typeAutoriteContractante'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISygAutoriteContractante>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: ITypeAutoriteContractante): any {
    return item.id;
  }
}
