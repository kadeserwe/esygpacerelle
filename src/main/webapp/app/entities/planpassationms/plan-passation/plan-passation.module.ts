import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PlanPassationComponent } from './plan-passation.component';
import { PlanPassationDetailComponent } from './plan-passation-detail.component';
import { PlanPassationUpdateComponent } from './plan-passation-update.component';
import { PlanPassationDeleteDialogComponent } from './plan-passation-delete-dialog.component';
import { planPassationRoute } from './plan-passation.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MiseAJourPpComponent } from './mise-a-jour-pp/mise-a-jour-pp.component';
import { PpPubliesComponent } from './pp-publies/pp-publies.component';
import { SuiviPpComponent } from './suivi-pp/suivi-pp.component';
import { PlanDePassationComponent } from '../../modules/plan-de-passation/plan-de-passation.component';
import { PlanPassationDemandeValidationComponent } from './plan-passation-demande-validation.component';
import { AjoutRealisationAuplanComponent } from './ajout-realisation-auplan.component';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(planPassationRoute)],
  declarations: [
    PlanDePassationComponent,
    PlanPassationComponent,
    PlanPassationDetailComponent,
    PlanPassationUpdateComponent,
    PlanPassationDeleteDialogComponent,
    MiseAJourPpComponent,
    PpPubliesComponent,
    SuiviPpComponent,
    // PlanPubliesDetailsComponent,
    PlanPassationDemandeValidationComponent,
    AjoutRealisationAuplanComponent,
  ],
  entryComponents: [PlanPassationDeleteDialogComponent],
})
export class PlanpassationmsPlanPassationModule {}
