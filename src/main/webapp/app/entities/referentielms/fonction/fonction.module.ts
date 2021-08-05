import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { FonctionComponent } from './fonction.component';
import { FonctionDetailComponent } from './fonction-detail.component';
import { FonctionUpdateComponent } from './fonction-update.component';
import { FonctionDeleteDialogComponent } from './fonction-delete-dialog.component';
import { fonctionRoute } from './fonction.route';
//Ajouter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(fonctionRoute)],
  declarations: [FonctionComponent, FonctionDetailComponent, FonctionUpdateComponent, FonctionDeleteDialogComponent],
  entryComponents: [FonctionDeleteDialogComponent],
})
export class ReferentielmsFonctionModule {}
