import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPiecesAdministratives, PiecesAdministratives } from 'app/shared/model/referentielms/pieces-administratives.model';
import { PiecesAdministrativesService } from './pieces-administratives.service';

@Component({
  selector: 'jhi-pieces-administratives-update',
  templateUrl: './pieces-administratives-update.component.html',
})
export class PiecesAdministrativesUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    codePiece: [null, [Validators.required]],
    libelle: [null, [Validators.required]],
    localisation: [null, [Validators.required]],
    type: [],
  });

  constructor(
    protected piecesAdministrativesService: PiecesAdministrativesService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ piecesAdministratives }) => {
      this.updateForm(piecesAdministratives);
    });
  }

  updateForm(piecesAdministratives: IPiecesAdministratives): void {
    this.editForm.patchValue({
      id: piecesAdministratives.id,
      codePiece: piecesAdministratives.codePiece,
      libelle: piecesAdministratives.libelle,
      localisation: piecesAdministratives.localisation,
      type: piecesAdministratives.type,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const piecesAdministratives = this.createFromForm();
    if (piecesAdministratives.id !== undefined) {
      // eslint-disable-next-line no-console
      console.log(
        'testt',
        this.subscribeToSaveResponse(this.piecesAdministrativesService.update(piecesAdministratives, piecesAdministratives.id))
      );
      this.subscribeToSaveResponse(this.piecesAdministrativesService.update(piecesAdministratives, piecesAdministratives.id));
    } else {
      this.subscribeToSaveResponse(this.piecesAdministrativesService.create(piecesAdministratives));
    }
  }

  private createFromForm(): IPiecesAdministratives {
    return {
      ...new PiecesAdministratives(),
      id: this.editForm.get(['id'])!.value,
      codePiece: this.editForm.get(['codePiece'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      localisation: this.editForm.get(['localisation'])!.value,
      type: this.editForm.get(['type'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPiecesAdministratives>>): void {
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
