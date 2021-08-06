import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { TypeAutoriteContractanteComponent } from './type-autorite-contractante.component';
import { TypeAutoriteContractanteDetailComponent } from './type-autorite-contractante-detail.component';
import { TypeAutoriteContractanteUpdateComponent } from './type-autorite-contractante-update.component';
import { TypeAutoriteContractanteDeleteDialogComponent } from './type-autorite-contractante-delete-dialog.component';
import { typeAutoriteContractanteRoute } from './type-autorite-contractante.route';

//Ajouter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule,Ng2SearchPipeModule, RouterModule.forChild(typeAutoriteContractanteRoute)],
  declarations: [
    TypeAutoriteContractanteComponent,
    TypeAutoriteContractanteDetailComponent,
    TypeAutoriteContractanteUpdateComponent,
    TypeAutoriteContractanteDeleteDialogComponent,
  ],
  entryComponents: [TypeAutoriteContractanteDeleteDialogComponent],
})
export class ReferentielmsTypeAutoriteContractanteModule {}
