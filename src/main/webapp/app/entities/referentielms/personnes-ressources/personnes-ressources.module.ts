import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PersonnesRessourcesComponent } from './personnes-ressources.component';
import { PersonnesRessourcesDetailComponent } from './personnes-ressources-detail.component';
import { PersonnesRessourcesUpdateComponent } from './personnes-ressources-update.component';
import { PersonnesRessourcesDeleteDialogComponent } from './personnes-ressources-delete-dialog.component';
import { personnesRessourcesRoute } from './personnes-ressources.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(personnesRessourcesRoute)],
  declarations: [
    PersonnesRessourcesComponent,
    PersonnesRessourcesDetailComponent,
    PersonnesRessourcesUpdateComponent,
    PersonnesRessourcesDeleteDialogComponent,
  ],
  entryComponents: [PersonnesRessourcesDeleteDialogComponent],
})
export class ReferentielmsPersonnesRessourcesModule {}
