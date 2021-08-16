import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DelaisComponent } from './delais.component';
import { DelaisDetailComponent } from './delais-detail.component';
import { DelaisUpdateComponent } from './delais-update.component';
import { DelaisDeleteDialogComponent } from './delais-delete-dialog.component';
import { delaisRoute } from './delais.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(delaisRoute)],
  declarations: [DelaisComponent, DelaisDetailComponent, DelaisUpdateComponent, DelaisDeleteDialogComponent],
  entryComponents: [DelaisDeleteDialogComponent],
})
export class ReferentielmsDelaisModule {}
