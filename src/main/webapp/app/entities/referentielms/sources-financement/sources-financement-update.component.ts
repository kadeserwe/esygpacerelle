import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISourcesFinancement, SourcesFinancement } from 'app/shared/model/referentielms/sources-financement.model';
import { SourcesFinancementService } from './sources-financement.service';

@Component({
  selector: 'jhi-sources-financement-update',
  templateUrl: './sources-financement-update.component.html',
})
export class SourcesFinancementUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
    type: [null, [Validators.required]],
  });

  constructor(
    protected sourcesFinancementService: SourcesFinancementService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sourcesFinancement }) => {
      this.updateForm(sourcesFinancement);
    });
  }

  updateForm(sourcesFinancement: ISourcesFinancement): void {
    this.editForm.patchValue({
      id: sourcesFinancement.id,
      libelle: sourcesFinancement.libelle,
      type: sourcesFinancement.type,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const sourcesFinancement = this.createFromForm();
    if (sourcesFinancement.id !== undefined) {
      this.subscribeToSaveResponse(this.sourcesFinancementService.update(sourcesFinancement));
    } else {
      this.subscribeToSaveResponse(this.sourcesFinancementService.create(sourcesFinancement));
    }
  }

  private createFromForm(): ISourcesFinancement {
    return {
      ...new SourcesFinancement(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      type: this.editForm.get(['type'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISourcesFinancement>>): void {
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
