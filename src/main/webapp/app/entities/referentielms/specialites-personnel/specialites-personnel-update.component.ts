import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISpecialitesPersonnel, SpecialitesPersonnel } from 'app/shared/model/referentielms/specialites-personnel.model';
import { SpecialitesPersonnelService } from './specialites-personnel.service';

@Component({
  selector: 'jhi-specialites-personnel-update',
  templateUrl: './specialites-personnel-update.component.html',
})
export class SpecialitesPersonnelUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
  });

  constructor(
    protected specialitesPersonnelService: SpecialitesPersonnelService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ specialitesPersonnel }) => {
      this.updateForm(specialitesPersonnel);
    });
  }

  updateForm(specialitesPersonnel: ISpecialitesPersonnel): void {
    this.editForm.patchValue({
      id: specialitesPersonnel.id,
      libelle: specialitesPersonnel.libelle,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const specialitesPersonnel = this.createFromForm();
    if (specialitesPersonnel.id !== undefined) {
      this.subscribeToSaveResponse(this.specialitesPersonnelService.update(specialitesPersonnel));
    } else {
      this.subscribeToSaveResponse(this.specialitesPersonnelService.create(specialitesPersonnel));
    }
  }

  private createFromForm(): ISpecialitesPersonnel {
    return {
      ...new SpecialitesPersonnel(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISpecialitesPersonnel>>): void {
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
