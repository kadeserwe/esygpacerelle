import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { AvisGenerauxComponent } from './avis-generaux.component';
import { AvisGenerauxDetailComponent } from './avis-generaux-detail.component';
import { AvisGenerauxUpdateComponent } from './avis-generaux-update.component';
import { AvisGenerauxDeleteDialogComponent } from './avis-generaux-delete-dialog.component';
import { avisGenerauxRoute } from './avis-generaux.route';
//Ajouter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(avisGenerauxRoute)],
  declarations: [AvisGenerauxComponent, AvisGenerauxDetailComponent, AvisGenerauxUpdateComponent, AvisGenerauxDeleteDialogComponent],
  entryComponents: [AvisGenerauxDeleteDialogComponent],
})
export class ReferentielmsAvisGenerauxModule {}
