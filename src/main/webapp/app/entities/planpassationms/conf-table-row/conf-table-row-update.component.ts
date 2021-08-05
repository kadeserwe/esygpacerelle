import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IConfTableRow, ConfTableRow } from 'app/shared/model/planpassationms/conf-table-row.model';
import { ConfTableRowService } from './conf-table-row.service';

@Component({
  selector: 'jhi-conf-table-row-update',
  templateUrl: './conf-table-row-update.component.html',
})
export class ConfTableRowUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    tableName: [null, [Validators.maxLength(64)]],
    labelName: [null, [Validators.maxLength(100)]],
    columnName: [null, [Validators.maxLength(50)]],
    dataType: [],
  });

  constructor(protected confTableRowService: ConfTableRowService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ confTableRow }) => {
      this.updateForm(confTableRow);
    });
  }

  updateForm(confTableRow: IConfTableRow): void {
    this.editForm.patchValue({
      id: confTableRow.id,
      tableName: confTableRow.tableName,
      labelName: confTableRow.labelName,
      columnName: confTableRow.columnName,
      dataType: confTableRow.dataType,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const confTableRow = this.createFromForm();
    if (confTableRow.id !== undefined) {
      this.subscribeToSaveResponse(this.confTableRowService.update(confTableRow));
    } else {
      this.subscribeToSaveResponse(this.confTableRowService.create(confTableRow));
    }
  }

  private createFromForm(): IConfTableRow {
    return {
      ...new ConfTableRow(),
      id: this.editForm.get(['id'])!.value,
      tableName: this.editForm.get(['tableName'])!.value,
      labelName: this.editForm.get(['labelName'])!.value,
      columnName: this.editForm.get(['columnName'])!.value,
      dataType: this.editForm.get(['dataType'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IConfTableRow>>): void {
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
