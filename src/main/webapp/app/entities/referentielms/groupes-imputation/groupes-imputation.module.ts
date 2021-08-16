import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { GroupesImputationComponent } from './groupes-imputation.component';
import { GroupesImputationDetailComponent } from './groupes-imputation-detail.component';
import { GroupesImputationUpdateComponent } from './groupes-imputation-update.component';
import { GroupesImputationDeleteDialogComponent } from './groupes-imputation-delete-dialog.component';
import { groupesImputationRoute } from './groupes-imputation.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(groupesImputationRoute)],
  declarations: [
    GroupesImputationComponent,
    GroupesImputationDetailComponent,
    GroupesImputationUpdateComponent,
    GroupesImputationDeleteDialogComponent,
  ],
  entryComponents: [GroupesImputationDeleteDialogComponent],
})
export class ReferentielmsGroupesImputationModule {}
