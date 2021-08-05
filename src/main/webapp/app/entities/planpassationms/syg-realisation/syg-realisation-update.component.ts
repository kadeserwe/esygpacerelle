import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISygRealisation, SygRealisation } from 'app/shared/model/planpassationms/syg-realisation.model';
import { SygRealisationService } from './syg-realisation.service';

@Component({
  selector: 'jhi-syg-realisation-update',
  templateUrl: './syg-realisation-update.component.html',
})
export class SygRealisationUpdateComponent implements OnInit {
  isSaving = false;
  dateAttributionDp: any;
  dateReceptionDossierDp: any;
  dateNonObjectionDp: any;
  dateAutorisationDp: any;
  dateRecepNonObjectionDp: any;
  dateRecepDossCorrigeDp: any;
  datePubParPrmpDp: any;
  dateOuverturePlisDp: any;
  dateRecepNonObjectOcmpDp: any;
  dateRecepRapportEvaDp: any;
  dateRecepNonObjectPtfDp: any;
  dateExamenJuridiqueDp: any;
  dateNotifContratDp: any;
  dateApprobationContratDp: any;

  editForm = this.fb.group({
    id: [],
    libelle: [null, [Validators.required]],
    dateAttribution: [null, [Validators.required]],
    delaiexecution: [],
    objet: [],
    montant: [],
    examenDncmp: [],
    examenPtf: [],
    chapitreImputation: [],
    autorisationEngagement: [],
    dateReceptionDossier: [],
    dateNonObjection: [],
    dateAutorisation: [],
    dateRecepNonObjection: [],
    dateRecepDossCorrige: [],
    datePubParPrmp: [],
    dateOuverturePlis: [],
    dateRecepNonObjectOcmp: [],
    dateRecepRapportEva: [],
    dateRecepNonObjectPtf: [],
    dateExamenJuridique: [],
    dateNotifContrat: [],
    dateApprobationContrat: [],
  });

  constructor(protected sygRealisationService: SygRealisationService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sygRealisation }) => {
      this.updateForm(sygRealisation);
    });
  }

  updateForm(sygRealisation: ISygRealisation): void {
    this.editForm.patchValue({
      id: sygRealisation.id,
      libelle: sygRealisation.libelle,
      dateAttribution: sygRealisation.dateAttribution,
      delaiexecution: sygRealisation.delaiexecution,
      objet: sygRealisation.objet,
      montant: sygRealisation.montant,
      examenDncmp: sygRealisation.examenDncmp,
      examenPtf: sygRealisation.examenPtf,
      chapitreImputation: sygRealisation.chapitreImputation,
      autorisationEngagement: sygRealisation.autorisationEngagement,
      dateReceptionDossier: sygRealisation.dateReceptionDossier,
      dateNonObjection: sygRealisation.dateNonObjection,
      dateAutorisation: sygRealisation.dateAutorisation,
      dateRecepNonObjection: sygRealisation.dateRecepNonObjection,
      dateRecepDossCorrige: sygRealisation.dateRecepDossCorrige,
      datePubParPrmp: sygRealisation.datePubParPrmp,
      dateOuverturePlis: sygRealisation.dateOuverturePlis,
      dateRecepNonObjectOcmp: sygRealisation.dateRecepNonObjectOcmp,
      dateRecepRapportEva: sygRealisation.dateRecepRapportEva,
      dateRecepNonObjectPtf: sygRealisation.dateRecepNonObjectPtf,
      dateExamenJuridique: sygRealisation.dateExamenJuridique,
      dateNotifContrat: sygRealisation.dateNotifContrat,
      dateApprobationContrat: sygRealisation.dateApprobationContrat,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const sygRealisation = this.createFromForm();
    if (sygRealisation.id !== undefined) {
      this.subscribeToSaveResponse(this.sygRealisationService.update(sygRealisation));
    } else {
      this.subscribeToSaveResponse(this.sygRealisationService.create(sygRealisation));
    }
  }

  private createFromForm(): ISygRealisation {
    return {
      ...new SygRealisation(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      dateAttribution: this.editForm.get(['dateAttribution'])!.value,
      delaiexecution: this.editForm.get(['delaiexecution'])!.value,
      objet: this.editForm.get(['objet'])!.value,
      montant: this.editForm.get(['montant'])!.value,
      examenDncmp: this.editForm.get(['examenDncmp'])!.value,
      examenPtf: this.editForm.get(['examenPtf'])!.value,
      chapitreImputation: this.editForm.get(['chapitreImputation'])!.value,
      autorisationEngagement: this.editForm.get(['autorisationEngagement'])!.value,
      dateReceptionDossier: this.editForm.get(['dateReceptionDossier'])!.value,
      dateNonObjection: this.editForm.get(['dateNonObjection'])!.value,
      dateAutorisation: this.editForm.get(['dateAutorisation'])!.value,
      dateRecepNonObjection: this.editForm.get(['dateRecepNonObjection'])!.value,
      dateRecepDossCorrige: this.editForm.get(['dateRecepDossCorrige'])!.value,
      datePubParPrmp: this.editForm.get(['datePubParPrmp'])!.value,
      dateOuverturePlis: this.editForm.get(['dateOuverturePlis'])!.value,
      dateRecepNonObjectOcmp: this.editForm.get(['dateRecepNonObjectOcmp'])!.value,
      dateRecepRapportEva: this.editForm.get(['dateRecepRapportEva'])!.value,
      dateRecepNonObjectPtf: this.editForm.get(['dateRecepNonObjectPtf'])!.value,
      dateExamenJuridique: this.editForm.get(['dateExamenJuridique'])!.value,
      dateNotifContrat: this.editForm.get(['dateNotifContrat'])!.value,
      dateApprobationContrat: this.editForm.get(['dateApprobationContrat'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISygRealisation>>): void {
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
