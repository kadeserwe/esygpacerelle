import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { ConfigurationTauxComponent } from './configuration-taux.component';
import { ConfigurationTauxDetailComponent } from './configuration-taux-detail.component';
import { ConfigurationTauxUpdateComponent } from './configuration-taux-update.component';
import { ConfigurationTauxDeleteDialogComponent } from './configuration-taux-delete-dialog.component';
import { configurationTauxRoute } from './configuration-taux.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(configurationTauxRoute)],
  declarations: [
    ConfigurationTauxComponent,
    ConfigurationTauxDetailComponent,
    ConfigurationTauxUpdateComponent,
    ConfigurationTauxDeleteDialogComponent,
  ],
  entryComponents: [ConfigurationTauxDeleteDialogComponent],
})
export class ReferentielmsConfigurationTauxModule {}
