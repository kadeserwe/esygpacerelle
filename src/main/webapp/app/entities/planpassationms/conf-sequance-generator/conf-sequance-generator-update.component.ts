import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IConfSequanceGenerator, ConfSequanceGenerator } from 'app/shared/model/planpassationms/conf-sequance-generator.model';
import { ConfSequanceGeneratorService } from './conf-sequance-generator.service';

@Component({
  selector: 'jhi-conf-sequance-generator-update',
  templateUrl: './conf-sequance-generator-update.component.html',
})
export class ConfSequanceGeneratorUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nomTable: [null, [Validators.maxLength(100)]],
    currentValue: [],
  });

  constructor(
    protected confSequanceGeneratorService: ConfSequanceGeneratorService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ confSequanceGenerator }) => {
      this.updateForm(confSequanceGenerator);
    });
  }

  updateForm(confSequanceGenerator: IConfSequanceGenerator): void {
    this.editForm.patchValue({
      id: confSequanceGenerator.id,
      nomTable: confSequanceGenerator.nomTable,
      currentValue: confSequanceGenerator.currentValue,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const confSequanceGenerator = this.createFromForm();
    if (confSequanceGenerator.id !== undefined) {
      this.subscribeToSaveResponse(this.confSequanceGeneratorService.update(confSequanceGenerator));
    } else {
      this.subscribeToSaveResponse(this.confSequanceGeneratorService.create(confSequanceGenerator));
    }
  }

  private createFromForm(): IConfSequanceGenerator {
    return {
      ...new ConfSequanceGenerator(),
      id: this.editForm.get(['id'])!.value,
      nomTable: this.editForm.get(['nomTable'])!.value,
      currentValue: this.editForm.get(['currentValue'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IConfSequanceGenerator>>): void {
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
