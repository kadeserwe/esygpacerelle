import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { SygAutoriteContractanteComponent } from './syg-autorite-contractante.component';
import { SygAutoriteContractanteDetailComponent } from './syg-autorite-contractante-detail.component';
import { SygAutoriteContractanteUpdateComponent } from './syg-autorite-contractante-update.component';
import { SygAutoriteContractanteDeleteDialogComponent } from './syg-autorite-contractante-delete-dialog.component';
import { sygAutoriteContractanteRoute } from './syg-autorite-contractante.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(sygAutoriteContractanteRoute)],
  declarations: [
    SygAutoriteContractanteComponent,
    SygAutoriteContractanteDetailComponent,
    SygAutoriteContractanteUpdateComponent,
    SygAutoriteContractanteDeleteDialogComponent,
  ],
  entryComponents: [SygAutoriteContractanteDeleteDialogComponent],
})
export class ReferentielmsSygAutoriteContractanteModule {}
