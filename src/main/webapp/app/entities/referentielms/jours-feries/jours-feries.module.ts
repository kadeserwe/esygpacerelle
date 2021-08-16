import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { JoursFeriesComponent } from './jours-feries.component';
import { JoursFeriesDetailComponent } from './jours-feries-detail.component';
import { JoursFeriesUpdateComponent } from './jours-feries-update.component';
import { JoursFeriesDeleteDialogComponent } from './jours-feries-delete-dialog.component';
import { joursFeriesRoute } from './jours-feries.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(joursFeriesRoute)],
  declarations: [JoursFeriesComponent, JoursFeriesDetailComponent, JoursFeriesUpdateComponent, JoursFeriesDeleteDialogComponent],
  entryComponents: [JoursFeriesDeleteDialogComponent],
})
export class ReferentielmsJoursFeriesModule {}
