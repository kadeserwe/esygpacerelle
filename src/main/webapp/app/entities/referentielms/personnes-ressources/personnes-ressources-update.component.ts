import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPersonnesRessources, PersonnesRessources } from 'app/shared/model/referentielms/personnes-ressources.model';
import { PersonnesRessourcesService } from './personnes-ressources.service';

@Component({
  selector: 'jhi-personnes-ressources-update',
  templateUrl: './personnes-ressources-update.component.html',
})
export class PersonnesRessourcesUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nom: [null, [Validators.required]],
    prenom: [null, [Validators.required]],
    telephone: [null, [Validators.required]],
    email: [],
    fonction: [],
    commentaires: [],
  });

  constructor(
    protected personnesRessourcesService: PersonnesRessourcesService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ personnesRessources }) => {
      this.updateForm(personnesRessources);
    });
  }

  updateForm(personnesRessources: IPersonnesRessources): void {
    this.editForm.patchValue({
      id: personnesRessources.id,
      nom: personnesRessources.nom,
      prenom: personnesRessources.prenom,
      telephone: personnesRessources.telephone,
      email: personnesRessources.email,
      fonction: personnesRessources.fonction,
      commentaires: personnesRessources.commentaires,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const personnesRessources = this.createFromForm();
    if (personnesRessources.id !== undefined) {
      this.subscribeToSaveResponse(this.personnesRessourcesService.update(personnesRessources));
    } else {
      this.subscribeToSaveResponse(this.personnesRessourcesService.create(personnesRessources));
    }
  }

  private createFromForm(): IPersonnesRessources {
    return {
      ...new PersonnesRessources(),
      id: this.editForm.get(['id'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      email: this.editForm.get(['email'])!.value,
      fonction: this.editForm.get(['fonction'])!.value,
      commentaires: this.editForm.get(['commentaires'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPersonnesRessources>>): void {
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
