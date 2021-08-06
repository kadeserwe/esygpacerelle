import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICategorieFournisseur, CategorieFournisseur } from 'app/shared/model/referentielms/categorie-fournisseur.model';
import { CategorieFournisseurService } from './categorie-fournisseur.service';

@Component({
  selector: 'jhi-categorie-fournisseur-update',
  templateUrl: './categorie-fournisseur-update.component.html',
})
export class CategorieFournisseurUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required, Validators.maxLength(255)]],
    description: [],
  });

  constructor(
    protected categorieFournisseurService: CategorieFournisseurService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ categorieFournisseur }) => {
      this.updateForm(categorieFournisseur);
    });
  }

  updateForm(categorieFournisseur: ICategorieFournisseur): void {
    this.editForm.patchValue({
      id: categorieFournisseur.id,
      libelle: categorieFournisseur.libelle,
      description: categorieFournisseur.description,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const categorieFournisseur = this.createFromForm();
    if (categorieFournisseur.id !== undefined) {
      this.subscribeToSaveResponse(this.categorieFournisseurService.update(categorieFournisseur));
    } else {
      this.subscribeToSaveResponse(this.categorieFournisseurService.create(categorieFournisseur));
    }
  }

  private createFromForm(): ICategorieFournisseur {
    return {
      ...new CategorieFournisseur(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      description: this.editForm.get(['description'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategorieFournisseur>>): void {
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
