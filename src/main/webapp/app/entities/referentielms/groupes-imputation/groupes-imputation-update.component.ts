import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IGroupesImputation, GroupesImputation } from 'app/shared/model/referentielms/groupes-imputation.model';
import { GroupesImputationService } from './groupes-imputation.service';

@Component({
  selector: 'jhi-groupes-imputation-update',
  templateUrl: './groupes-imputation-update.component.html',
})
export class GroupesImputationUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
    description: [],
  });

  constructor(
    protected groupesImputationService: GroupesImputationService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ groupesImputation }) => {
      this.updateForm(groupesImputation);
    });
  }

  updateForm(groupesImputation: IGroupesImputation): void {
    this.editForm.patchValue({
      id: groupesImputation.id,
      libelle: groupesImputation.libelle,
      description: groupesImputation.description,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const groupesImputation = this.createFromForm();
    if (groupesImputation.id !== undefined) {
      this.subscribeToSaveResponse(this.groupesImputationService.update(groupesImputation));
    } else {
      this.subscribeToSaveResponse(this.groupesImputationService.create(groupesImputation));
    }
  }

  private createFromForm(): IGroupesImputation {
    return {
      ...new GroupesImputation(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      description: this.editForm.get(['description'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IGroupesImputation>>): void {
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
