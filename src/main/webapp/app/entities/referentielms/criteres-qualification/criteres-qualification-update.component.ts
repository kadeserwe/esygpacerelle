import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ICriteresQualification, CriteresQualification } from 'app/shared/model/referentielms/criteres-qualification.model';
import { CriteresQualificationService } from './criteres-qualification.service';

@Component({
  selector: 'jhi-criteres-qualification-update',
  templateUrl: './criteres-qualification-update.component.html',
})
export class CriteresQualificationUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
  });

  constructor(
    protected criteresQualificationService: CriteresQualificationService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ criteresQualification }) => {
      this.updateForm(criteresQualification);
    });
  }

  updateForm(criteresQualification: ICriteresQualification): void {
    this.editForm.patchValue({
      id: criteresQualification.id,
      libelle: criteresQualification.libelle,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const criteresQualification = this.createFromForm();
    if (criteresQualification.id !== undefined) {
      this.subscribeToSaveResponse(this.criteresQualificationService.update(criteresQualification, criteresQualification.id));
    } else {
      this.subscribeToSaveResponse(this.criteresQualificationService.create(criteresQualification));
    }
  }

  private createFromForm(): ICriteresQualification {
    return {
      ...new CriteresQualification(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICriteresQualification>>): void {
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
