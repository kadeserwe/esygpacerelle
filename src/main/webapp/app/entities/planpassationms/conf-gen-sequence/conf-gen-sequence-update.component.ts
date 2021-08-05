import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IConfGenSequence, ConfGenSequence } from 'app/shared/model/planpassationms/conf-gen-sequence.model';
import { ConfGenSequenceService } from './conf-gen-sequence.service';

@Component({
  selector: 'jhi-conf-gen-sequence-update',
  templateUrl: './conf-gen-sequence-update.component.html',
})
export class ConfGenSequenceUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    tableName: [null, [Validators.maxLength(100)]],
    currentValue: [],
  });

  constructor(
    protected confGenSequenceService: ConfGenSequenceService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ confGenSequence }) => {
      this.updateForm(confGenSequence);
    });
  }

  updateForm(confGenSequence: IConfGenSequence): void {
    this.editForm.patchValue({
      id: confGenSequence.id,
      tableName: confGenSequence.tableName,
      currentValue: confGenSequence.currentValue,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const confGenSequence = this.createFromForm();
    if (confGenSequence.id !== undefined) {
      this.subscribeToSaveResponse(this.confGenSequenceService.update(confGenSequence));
    } else {
      this.subscribeToSaveResponse(this.confGenSequenceService.create(confGenSequence));
    }
  }

  private createFromForm(): IConfGenSequence {
    return {
      ...new ConfGenSequence(),
      id: this.editForm.get(['id'])!.value,
      tableName: this.editForm.get(['tableName'])!.value,
      currentValue: this.editForm.get(['currentValue'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IConfGenSequence>>): void {
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
