import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IHierarchie, Hierarchie } from 'app/shared/model/referentielms/hierarchie.model';
import { HierarchieService } from './hierarchie.service';

@Component({
  selector: 'jhi-hierarchie-update',
  templateUrl: './hierarchie-update.component.html',
})
export class HierarchieUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
  });

  constructor(protected hierarchieService: HierarchieService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ hierarchie }) => {
      this.updateForm(hierarchie);
    });
  }

  updateForm(hierarchie: IHierarchie): void {
    this.editForm.patchValue({
      id: hierarchie.id,
      libelle: hierarchie.libelle,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const hierarchie = this.createFromForm();
    if (hierarchie.id !== undefined) {
      this.subscribeToSaveResponse(this.hierarchieService.update(hierarchie));
    } else {
      this.subscribeToSaveResponse(this.hierarchieService.create(hierarchie));
    }
  }

  private createFromForm(): IHierarchie {
    return {
      ...new Hierarchie(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IHierarchie>>): void {
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
