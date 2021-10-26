import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IFonction, Fonction } from 'app/shared/model/referentielms/fonction.model';
import { FonctionService } from './fonction.service';

@Component({
  selector: 'jhi-fonction-update',
  templateUrl: './fonction-update.component.html',
})
export class FonctionUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
    description: [],
  });

  constructor(protected fonctionService: FonctionService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fonction }) => {
      this.updateForm(fonction);
    });
  }

  updateForm(fonction: IFonction): void {
    this.editForm.patchValue({
      id: fonction.id,
      libelle: fonction.libelle,
      description: fonction.description,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const fonction = this.createFromForm();
    if (fonction.id !== undefined) {
      this.subscribeToSaveResponse(this.fonctionService.update(fonction, fonction.id));
    } else {
      this.subscribeToSaveResponse(this.fonctionService.create(fonction));
    }
  }

  private createFromForm(): IFonction {
    return {
      ...new Fonction(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      description: this.editForm.get(['description'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFonction>>): void {
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
