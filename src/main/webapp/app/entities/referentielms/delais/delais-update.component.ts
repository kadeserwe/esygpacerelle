import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IDelais, Delais } from 'app/shared/model/referentielms/delais.model';
import { DelaisService } from './delais.service';

@Component({
  selector: 'jhi-delais-update',
  templateUrl: './delais-update.component.html',
})
export class DelaisUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
    code: [null, [Validators.required]],
    unite: [null, [Validators.required]],
    valeur: [null, [Validators.required]],
    debutValidite: [null, [Validators.required]],
    finValidite: [null, [Validators.required]],
    commentaires: [],
  });

  constructor(protected delaisService: DelaisService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ delais }) => {
      if (!delais.id) {
        const today = moment().startOf('day');
        delais.debutValidite = today;
        delais.finValidite = today;
      }

      this.updateForm(delais);
    });
  }

  updateForm(delais: IDelais): void {
    this.editForm.patchValue({
      id: delais.id,
      libelle: delais.libelle,
      code: delais.code,
      unite: delais.unite,
      valeur: delais.valeur,
      debutValidite: delais.debutValidite ? delais.debutValidite.format(DATE_TIME_FORMAT) : null,
      finValidite: delais.finValidite ? delais.finValidite.format(DATE_TIME_FORMAT) : null,
      commentaires: delais.commentaires,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const delais = this.createFromForm();
    if (delais.id !== undefined) {
      this.subscribeToSaveResponse(this.delaisService.update(delais));
    } else {
      this.subscribeToSaveResponse(this.delaisService.create(delais));
    }
  }

  private createFromForm(): IDelais {
    return {
      ...new Delais(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      code: this.editForm.get(['code'])!.value,
      unite: this.editForm.get(['unite'])!.value,
      valeur: this.editForm.get(['valeur'])!.value,
      debutValidite: this.editForm.get(['debutValidite'])!.value
        ? moment(this.editForm.get(['debutValidite'])!.value, DATE_TIME_FORMAT)
        : undefined,
      finValidite: this.editForm.get(['finValidite'])!.value
        ? moment(this.editForm.get(['finValidite'])!.value, DATE_TIME_FORMAT)
        : undefined,
      commentaires: this.editForm.get(['commentaires'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDelais>>): void {
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
