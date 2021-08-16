import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { GarantieComponent } from './garantie.component';
import { GarantieDetailComponent } from './garantie-detail.component';
import { GarantieUpdateComponent } from './garantie-update.component';
import { GarantieDeleteDialogComponent } from './garantie-delete-dialog.component';
import { garantieRoute } from './garantie.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(garantieRoute)],
  declarations: [GarantieComponent, GarantieDetailComponent, GarantieUpdateComponent, GarantieDeleteDialogComponent],
  entryComponents: [GarantieDeleteDialogComponent],
})
export class ReferentielmsGarantieModule {}
