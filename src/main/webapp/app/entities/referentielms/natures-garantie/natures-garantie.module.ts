import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { NaturesGarantieComponent } from './natures-garantie.component';
import { NaturesGarantieDetailComponent } from './natures-garantie-detail.component';
import { NaturesGarantieUpdateComponent } from './natures-garantie-update.component';
import { NaturesGarantieDeleteDialogComponent } from './natures-garantie-delete-dialog.component';
import { naturesGarantieRoute } from './natures-garantie.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(naturesGarantieRoute)],
  declarations: [
    NaturesGarantieComponent,
    NaturesGarantieDetailComponent,
    NaturesGarantieUpdateComponent,
    NaturesGarantieDeleteDialogComponent,
  ],
  entryComponents: [NaturesGarantieDeleteDialogComponent],
})
export class ReferentielmsNaturesGarantieModule {}
