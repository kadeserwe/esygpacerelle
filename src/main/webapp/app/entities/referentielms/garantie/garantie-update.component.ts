import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IGarantie, Garantie } from 'app/shared/model/referentielms/garantie.model';
import { GarantieService } from './garantie.service';

@Component({
  selector: 'jhi-garantie-update',
  templateUrl: './garantie-update.component.html',
})
export class GarantieUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
    typeGarantie: [null, [Validators.required]],
    description: [],
  });

  constructor(protected garantieService: GarantieService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ garantie }) => {
      this.updateForm(garantie);
    });
  }

  updateForm(garantie: IGarantie): void {
    this.editForm.patchValue({
      id: garantie.id,
      libelle: garantie.libelle,
      typeGarantie: garantie.typeGarantie,
      description: garantie.description,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const garantie = this.createFromForm();
    if (garantie.id !== undefined) {
      this.subscribeToSaveResponse(this.garantieService.update(garantie));
    } else {
      this.subscribeToSaveResponse(this.garantieService.create(garantie));
    }
  }

  private createFromForm(): IGarantie {
    return {
      ...new Garantie(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      typeGarantie: this.editForm.get(['typeGarantie'])!.value,
      description: this.editForm.get(['description'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IGarantie>>): void {
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
