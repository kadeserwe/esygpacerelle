import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ITypesMarches, TypesMarches } from 'app/shared/model/referentielms/types-marches.model';
import { TypesMarchesService } from './types-marches.service';

@Component({
  selector: 'jhi-types-marches-update',
  templateUrl: './types-marches-update.component.html',
})
export class TypesMarchesUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required]],
    libelle: [],
    description: [],
  });

  constructor(protected typesMarchesService: TypesMarchesService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ typesMarches }) => {
      this.updateForm(typesMarches);
    });
  }

  updateForm(typesMarches: ITypesMarches): void {
    this.editForm.patchValue({
      id: typesMarches.id,
      code: typesMarches.code,
      libelle: typesMarches.libelle,
      description: typesMarches.description,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const typesMarches = this.createFromForm();
    if (typesMarches.id !== undefined) {
      this.subscribeToSaveResponse(this.typesMarchesService.update(typesMarches, typesMarches.id));
    } else {
      this.subscribeToSaveResponse(this.typesMarchesService.create(typesMarches));
    }
  }

  private createFromForm(): ITypesMarches {
    return {
      ...new TypesMarches(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      description: this.editForm.get(['description'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITypesMarches>>): void {
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
