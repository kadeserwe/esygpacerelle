import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { CriteresQualificationComponent } from './criteres-qualification.component';
import { CriteresQualificationDetailComponent } from './criteres-qualification-detail.component';
import { CriteresQualificationUpdateComponent } from './criteres-qualification-update.component';
import { CriteresQualificationDeleteDialogComponent } from './criteres-qualification-delete-dialog.component';
import { criteresQualificationRoute } from './criteres-qualification.route';
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(criteresQualificationRoute)],
  declarations: [
    CriteresQualificationComponent,
    CriteresQualificationDetailComponent,
    CriteresQualificationUpdateComponent,
    CriteresQualificationDeleteDialogComponent,
  ],
  entryComponents: [CriteresQualificationDeleteDialogComponent],
})
export class ReferentielmsCriteresQualificationModule {}
