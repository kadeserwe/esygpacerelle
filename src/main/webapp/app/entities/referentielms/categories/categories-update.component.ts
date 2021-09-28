import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICategories, Categories } from 'app/shared/model/referentielms/categories.model';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'jhi-categories-update',
  templateUrl: './categories-update.component.html',
})
export class CategoriesUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required]],
    designation: [null, [Validators.required]],
    commentaire: [],
  });

  constructor(protected categoriesService: CategoriesService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ categories }) => {
      this.updateForm(categories);
    });
  }

  updateForm(categories: ICategories): void {
    this.editForm.patchValue({
      id: categories.id,
      code: categories.code,
      designation: categories.designation,
      commentaire: categories.commentaire,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const categories = this.createFromForm();
    if (categories.id !== undefined) {
      this.subscribeToSaveResponse(this.categoriesService.update(categories));
    } else {
      this.subscribeToSaveResponse(this.categoriesService.create(categories));
    }
  }

  private createFromForm(): ICategories {
    return {
      ...new Categories(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      designation: this.editForm.get(['designation'])!.value,
      commentaire: this.editForm.get(['commentaire'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategories>>): void {
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
