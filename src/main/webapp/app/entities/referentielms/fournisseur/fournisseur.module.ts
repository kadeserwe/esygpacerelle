import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { FournisseurComponent } from './fournisseur.component';
import { FournisseurDetailComponent } from './fournisseur-detail.component';
import { FournisseurUpdateComponent } from './fournisseur-update.component';
import { FournisseurDeleteDialogComponent } from './fournisseur-delete-dialog.component';
import { fournisseurRoute } from './fournisseur.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(fournisseurRoute)],
  declarations: [FournisseurComponent, FournisseurDetailComponent, FournisseurUpdateComponent, FournisseurDeleteDialogComponent],
  entryComponents: [FournisseurDeleteDialogComponent],
})
export class ReferentielmsFournisseurModule {}
