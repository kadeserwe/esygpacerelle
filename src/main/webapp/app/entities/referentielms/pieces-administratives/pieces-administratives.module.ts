import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PiecesAdministrativesComponent } from './pieces-administratives.component';
import { PiecesAdministrativesDetailComponent } from './pieces-administratives-detail.component';
import { PiecesAdministrativesUpdateComponent } from './pieces-administratives-update.component';
import { PiecesAdministrativesDeleteDialogComponent } from './pieces-administratives-delete-dialog.component';
import { piecesAdministrativesRoute } from './pieces-administratives.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(piecesAdministrativesRoute)],
  declarations: [
    PiecesAdministrativesComponent,
    PiecesAdministrativesDetailComponent,
    PiecesAdministrativesUpdateComponent,
    PiecesAdministrativesDeleteDialogComponent,
  ],
  entryComponents: [PiecesAdministrativesDeleteDialogComponent],
})
export class ReferentielmsPiecesAdministrativesModule {}
