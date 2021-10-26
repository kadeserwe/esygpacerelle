import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IModeSelection, ModeSelection } from 'app/shared/model/referentielms/mode-selection.model';
import { ModeSelectionService } from './mode-selection.service';

@Component({
  selector: 'jhi-mode-selection-update',
  templateUrl: './mode-selection-update.component.html',
})
export class ModeSelectionUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required, Validators.maxLength(255)]],
    code: [null, [Validators.required, Validators.maxLength(50)]],
    description: [],
  });

  constructor(protected modeSelectionService: ModeSelectionService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ modeSelection }) => {
      this.updateForm(modeSelection);
    });
  }

  updateForm(modeSelection: IModeSelection): void {
    this.editForm.patchValue({
      id: modeSelection.id,
      libelle: modeSelection.libelle,
      code: modeSelection.code,
      description: modeSelection.description,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const modeSelection = this.createFromForm();
    if (modeSelection.id !== undefined) {
      this.subscribeToSaveResponse(this.modeSelectionService.update(modeSelection, modeSelection.id));
    } else {
      this.subscribeToSaveResponse(this.modeSelectionService.create(modeSelection));
    }
  }

  private createFromForm(): IModeSelection {
    return {
      ...new ModeSelection(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      code: this.editForm.get(['code'])!.value,
      description: this.editForm.get(['description'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IModeSelection>>): void {
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
