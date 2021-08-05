import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { SygRealisationComponent } from './syg-realisation.component';
import { SygRealisationDetailComponent } from './syg-realisation-detail.component';
import { SygRealisationUpdateComponent } from './syg-realisation-update.component';
import { SygRealisationDeleteDialogComponent } from './syg-realisation-delete-dialog.component';
import { sygRealisationRoute } from './syg-realisation.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(sygRealisationRoute)],
  declarations: [
    SygRealisationComponent,
    SygRealisationDetailComponent,
    SygRealisationUpdateComponent,
    SygRealisationDeleteDialogComponent,
  ],
  entryComponents: [SygRealisationDeleteDialogComponent],
})
export class PlanpassationmsSygRealisationModule {}
