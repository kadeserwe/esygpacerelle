import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { ConfGenSequenceComponent } from './conf-gen-sequence.component';
import { ConfGenSequenceDetailComponent } from './conf-gen-sequence-detail.component';
import { ConfGenSequenceUpdateComponent } from './conf-gen-sequence-update.component';
import { ConfGenSequenceDeleteDialogComponent } from './conf-gen-sequence-delete-dialog.component';
import { confGenSequenceRoute } from './conf-gen-sequence.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(confGenSequenceRoute)],
  declarations: [
    ConfGenSequenceComponent,
    ConfGenSequenceDetailComponent,
    ConfGenSequenceUpdateComponent,
    ConfGenSequenceDeleteDialogComponent,
  ],
  entryComponents: [ConfGenSequenceDeleteDialogComponent],
})
export class PlanpassationmsConfGenSequenceModule {}
