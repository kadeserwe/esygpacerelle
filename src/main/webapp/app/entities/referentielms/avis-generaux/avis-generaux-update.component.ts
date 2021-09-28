import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IAvisGeneraux, AvisGeneraux } from 'app/shared/model/referentielms/avis-generaux.model';
import { AvisGenerauxService } from './avis-generaux.service';
import { AlertError } from 'app/shared/alert/alert-error.model';

@Component({
  selector: 'jhi-avis-generaux-update',
  templateUrl: './avis-generaux-update.component.html',
})
export class AvisGenerauxUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    numero: [],
    annee: [],
    description: [],
    fichierAvis: [],
    fichierAvisContentType: [],
    version: [],
    lastVersionValid: [],
    etat: [],
    datePublication: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected avisGenerauxService: AvisGenerauxService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ avisGeneraux }) => {
      if (!avisGeneraux.id) {
        const today = moment().startOf('day');
        avisGeneraux.datePublication = today;
      }

      this.updateForm(avisGeneraux);
    });
  }

  updateForm(avisGeneraux: IAvisGeneraux): void {
    this.editForm.patchValue({
      id: avisGeneraux.id,
      numero: avisGeneraux.numero,
      annee: avisGeneraux.annee,
      description: avisGeneraux.description,
      fichierAvis: avisGeneraux.fichierAvis,
      fichierAvisContentType: avisGeneraux.fichierAvisContentType,
      version: avisGeneraux.version,
      lastVersionValid: avisGeneraux.lastVersionValid,
      etat: avisGeneraux.etat,
      datePublication: avisGeneraux.datePublication ? avisGeneraux.datePublication.format(DATE_TIME_FORMAT) : null,
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

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const avisGeneraux = this.createFromForm();
    if (avisGeneraux.id !== undefined) {
      this.subscribeToSaveResponse(this.avisGenerauxService.update(avisGeneraux));
    } else {
      this.subscribeToSaveResponse(this.avisGenerauxService.create(avisGeneraux));
    }
  }

  private createFromForm(): IAvisGeneraux {
    return {
      ...new AvisGeneraux(),
      id: this.editForm.get(['id'])!.value,
      numero: this.editForm.get(['numero'])!.value,
      annee: this.editForm.get(['annee'])!.value,
      description: this.editForm.get(['description'])!.value,
      fichierAvisContentType: this.editForm.get(['fichierAvisContentType'])!.value,
      fichierAvis: this.editForm.get(['fichierAvis'])!.value,
      version: this.editForm.get(['version'])!.value,
      lastVersionValid: this.editForm.get(['lastVersionValid'])!.value,
      etat: this.editForm.get(['etat'])!.value,
      datePublication: this.editForm.get(['datePublication'])!.value
        ? moment(this.editForm.get(['datePublication'])!.value, DATE_TIME_FORMAT)
        : undefined,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAvisGeneraux>>): void {
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
}
