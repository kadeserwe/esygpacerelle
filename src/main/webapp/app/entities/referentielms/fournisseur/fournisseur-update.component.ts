import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IFournisseur, Fournisseur } from 'app/shared/model/referentielms/fournisseur.model';
import { FournisseurService } from './fournisseur.service';

import { IPays } from 'app/shared/model/referentielms/pays.model';
import { PaysService } from 'app/entities/referentielms/pays/pays.service';
import { ICategorieFournisseur } from '../../../shared/model/referentielms/categorie-fournisseur.model';
import { CategorieFournisseurService } from '../categorie-fournisseur/categorie-fournisseur.service';

type SelectableEntity = ICategorieFournisseur | IPays;

@Component({
  selector: 'jhi-fournisseur-update',
  templateUrl: './fournisseur-update.component.html',
})
export class FournisseurUpdateComponent implements OnInit {
  isSaving = false;
  categoriefournisseurs: ICategorieFournisseur[] = [];
  pays: IPays[] = [];

  editForm = this.fb.group({
    id: [],
    raisonSociale: [null, [Validators.required]],
    adresse: [null, [Validators.required]],
    email: [null, [Validators.required]],
    telephone: [null, [Validators.required]],
    pieceJointe: [],
    numeroRegistreCommerce: [],
    date: [null, [Validators.required]],
    sigle: [],
    numeroIdentiteFiscale: [],
    categorieFournisseur: [],
    pays: [],
  });

  constructor(
    protected fournisseurService: FournisseurService,
    protected categorieFournisseurService: CategorieFournisseurService,
    protected paysService: PaysService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fournisseur }) => {
      if (!fournisseur.id) {
        const today = moment().startOf('day');
        fournisseur.date = today;
      }

      this.updateForm(fournisseur);

      this.categorieFournisseurService
        .query()
        .subscribe((res: HttpResponse<ICategorieFournisseur[]>) => (this.categoriefournisseurs = res.body || []));

      this.paysService.query().subscribe((res: HttpResponse<IPays[]>) => (this.pays = res.body || []));
    });
  }

  updateForm(fournisseur: IFournisseur): void {
    this.editForm.patchValue({
      id: fournisseur.id,
      raisonSociale: fournisseur.raisonSociale,
      adresse: fournisseur.adresse,
      email: fournisseur.email,
      telephone: fournisseur.telephone,
      pieceJointe: fournisseur.pieceJointe,
      numeroRegistreCommerce: fournisseur.numeroRegistreCommerce,
      date: fournisseur.date ? fournisseur.date.format(DATE_TIME_FORMAT) : null,
      sigle: fournisseur.sigle,
      numeroIdentiteFiscale: fournisseur.numeroIdentiteFiscale,
      categorieFournisseur: fournisseur.categorieFournisseur,
      pays: fournisseur.pays,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const fournisseur = this.createFromForm();
    if (fournisseur.id !== undefined) {
      this.subscribeToSaveResponse(this.fournisseurService.update(fournisseur));
    } else {
      this.subscribeToSaveResponse(this.fournisseurService.create(fournisseur));
    }
  }

  private createFromForm(): IFournisseur {
    return {
      ...new Fournisseur(),
      id: this.editForm.get(['id'])!.value,
      raisonSociale: this.editForm.get(['raisonSociale'])!.value,
      adresse: this.editForm.get(['adresse'])!.value,
      email: this.editForm.get(['email'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      pieceJointe: this.editForm.get(['pieceJointe'])!.value,
      numeroRegistreCommerce: this.editForm.get(['numeroRegistreCommerce'])!.value,
      date: this.editForm.get(['date'])!.value ? moment(this.editForm.get(['date'])!.value, DATE_TIME_FORMAT) : undefined,
      sigle: this.editForm.get(['sigle'])!.value,
      numeroIdentiteFiscale: this.editForm.get(['numeroIdentiteFiscale'])!.value,
      categorieFournisseur: this.editForm.get(['categorieFournisseur'])!.value,
      pays: this.editForm.get(['pays'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFournisseur>>): void {
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

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
