import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IJoursFeries, JoursFeries } from 'app/shared/model/referentielms/jours-feries.model';
import { JoursFeriesService } from './jours-feries.service';

@Component({
  selector: 'jhi-jours-feries-update',
  templateUrl: './jours-feries-update.component.html',
})
export class JoursFeriesUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    date: [null, [Validators.required]],
    description: [],
  });

  constructor(protected joursFeriesService: JoursFeriesService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ joursFeries }) => {
      if (!joursFeries.id) {
        const today = moment().startOf('day');
        joursFeries.date = today;
      }

      this.updateForm(joursFeries);
    });
  }

  updateForm(joursFeries: IJoursFeries): void {
    this.editForm.patchValue({
      id: joursFeries.id,
      date: joursFeries.date ? joursFeries.date.format(DATE_TIME_FORMAT) : null,
      description: joursFeries.description,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const joursFeries = this.createFromForm();
    if (joursFeries.id !== undefined) {
      this.subscribeToSaveResponse(this.joursFeriesService.update(joursFeries));
    } else {
      this.subscribeToSaveResponse(this.joursFeriesService.create(joursFeries));
    }
  }

  private createFromForm(): IJoursFeries {
    return {
      ...new JoursFeries(),
      id: this.editForm.get(['id'])!.value,
      date: this.editForm.get(['date'])!.value ? moment(this.editForm.get(['date'])!.value, DATE_TIME_FORMAT) : undefined,
      description: this.editForm.get(['description'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IJoursFeries>>): void {
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
