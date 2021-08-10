import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IConfigurationTaux, ConfigurationTaux } from 'app/shared/model/referentielms/configuration-taux.model';
import { ConfigurationTauxService } from './configuration-taux.service';
import { IPays } from 'app/shared/model/referentielms/pays.model';
import { PaysService } from 'app/entities/referentielms/pays/pays.service';

@Component({
  selector: 'jhi-configuration-taux-update',
  templateUrl: './configuration-taux-update.component.html',
})
export class ConfigurationTauxUpdateComponent implements OnInit {
  isSaving = false;
  pays: IPays[] = [];

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required]],
    libelle: [null, [Validators.required]],
    taux: [null, [Validators.required]],
    dateDebut: [],
    dateFin: [],
    invalid: [],
    paysA: [],
  });

  constructor(
    protected configurationTauxService: ConfigurationTauxService,
    protected paysService: PaysService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ configurationTaux }) => {
      if (!configurationTaux.id) {
        const today = moment().startOf('day');
        configurationTaux.dateDebut = today;
        configurationTaux.dateFin = today;
      }

      this.updateForm(configurationTaux);

      this.paysService.query().subscribe((res: HttpResponse<IPays[]>) => (this.pays = res.body || []));
    });
  }

  updateForm(configurationTaux: IConfigurationTaux): void {
    this.editForm.patchValue({
      id: configurationTaux.id,
      code: configurationTaux.code,
      libelle: configurationTaux.libelle,
      taux: configurationTaux.taux,
      dateDebut: configurationTaux.dateDebut ? configurationTaux.dateDebut.format(DATE_TIME_FORMAT) : null,
      dateFin: configurationTaux.dateFin ? configurationTaux.dateFin.format(DATE_TIME_FORMAT) : null,
      invalid: configurationTaux.invalid,
      paysA: configurationTaux.paysA,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const configurationTaux = this.createFromForm();
    if (configurationTaux.id !== undefined) {
      this.subscribeToSaveResponse(this.configurationTauxService.update(configurationTaux));
    } else {
      this.subscribeToSaveResponse(this.configurationTauxService.create(configurationTaux));
    }
  }

  private createFromForm(): IConfigurationTaux {
    return {
      ...new ConfigurationTaux(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      taux: this.editForm.get(['taux'])!.value,
      dateDebut: this.editForm.get(['dateDebut'])!.value ? moment(this.editForm.get(['dateDebut'])!.value, DATE_TIME_FORMAT) : undefined,
      dateFin: this.editForm.get(['dateFin'])!.value ? moment(this.editForm.get(['dateFin'])!.value, DATE_TIME_FORMAT) : undefined,
      invalid: this.editForm.get(['invalid'])!.value,
      paysA: this.editForm.get(['paysA'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IConfigurationTaux>>): void {
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

  trackById(index: number, item: IPays): any {
    return item.id;
  }
}
