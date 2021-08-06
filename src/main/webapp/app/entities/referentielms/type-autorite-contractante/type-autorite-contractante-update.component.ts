import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ITypeAutoriteContractante, TypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';
import { TypeAutoriteContractanteService } from './type-autorite-contractante.service';

@Component({
  selector: 'jhi-type-autorite-contractante-update',
  templateUrl: './type-autorite-contractante-update.component.html',
})
export class TypeAutoriteContractanteUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required, Validators.maxLength(255)]],
    code: [null, [Validators.required, Validators.maxLength(10)]],
    description: [],
    ordre: [null, [Validators.required]],
    chapitre: [null, [Validators.required, Validators.maxLength(10)]],
  });

  constructor(
    protected typeAutoriteContractanteService: TypeAutoriteContractanteService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ typeAutoriteContractante }) => {
      this.updateForm(typeAutoriteContractante);
    });
  }

  updateForm(typeAutoriteContractante: ITypeAutoriteContractante): void {
    this.editForm.patchValue({
      id: typeAutoriteContractante.id,
      libelle: typeAutoriteContractante.libelle,
      code: typeAutoriteContractante.code,
      description: typeAutoriteContractante.description,
      ordre: typeAutoriteContractante.ordre,
      chapitre: typeAutoriteContractante.chapitre,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const typeAutoriteContractante = this.createFromForm();
    if (typeAutoriteContractante.id !== undefined) {
      this.subscribeToSaveResponse(this.typeAutoriteContractanteService.update(typeAutoriteContractante));
    } else {
      this.subscribeToSaveResponse(this.typeAutoriteContractanteService.create(typeAutoriteContractante));
    }
  }

  private createFromForm(): ITypeAutoriteContractante {
    return {
      ...new TypeAutoriteContractante(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      code: this.editForm.get(['code'])!.value,
      description: this.editForm.get(['description'])!.value,
      ordre: this.editForm.get(['ordre'])!.value,
      chapitre: this.editForm.get(['chapitre'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITypeAutoriteContractante>>): void {
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
