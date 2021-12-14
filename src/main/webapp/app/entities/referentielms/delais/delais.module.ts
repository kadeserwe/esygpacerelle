import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DelaisComponent } from './delais.component';
import { DelaisDetailComponent } from './delais-detail.component';
import { DelaisUpdateComponent } from './delais-update.component';
import { DelaisDeleteDialogComponent } from './delais-delete-dialog.component';
import { delaisRoute } from './delais.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(delaisRoute)],
  declarations: [DelaisComponent, DelaisDetailComponent, DelaisUpdateComponent, DelaisDeleteDialogComponent],
  entryComponents: [DelaisDeleteDialogComponent],
})
export class ReferentielmsDelaisModule {}
