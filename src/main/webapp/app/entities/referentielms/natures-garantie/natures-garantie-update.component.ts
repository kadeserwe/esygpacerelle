import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { INaturesGarantie, NaturesGarantie } from 'app/shared/model/referentielms/natures-garantie.model';
import { NaturesGarantieService } from './natures-garantie.service';

@Component({
  selector: 'jhi-natures-garantie-update',
  templateUrl: './natures-garantie-update.component.html',
})
export class NaturesGarantieUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
  });

  constructor(
    protected naturesGarantieService: NaturesGarantieService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ naturesGarantie }) => {
      this.updateForm(naturesGarantie);
    });
  }

  updateForm(naturesGarantie: INaturesGarantie): void {
    this.editForm.patchValue({
      id: naturesGarantie.id,
      libelle: naturesGarantie.libelle,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const naturesGarantie = this.createFromForm();
    if (naturesGarantie.id !== undefined) {
      this.subscribeToSaveResponse(this.naturesGarantieService.update(naturesGarantie));
    } else {
      this.subscribeToSaveResponse(this.naturesGarantieService.create(naturesGarantie));
    }
  }

  private createFromForm(): INaturesGarantie {
    return {
      ...new NaturesGarantie(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<INaturesGarantie>>): void {
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
