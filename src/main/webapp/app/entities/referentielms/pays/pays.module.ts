import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PaysComponent } from './pays.component';
import { PaysDetailComponent } from './pays-detail.component';
import { PaysUpdateComponent } from './pays-update.component';
import { PaysDeleteDialogComponent } from './pays-delete-dialog.component';
import { paysRoute } from './pays.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(paysRoute)],
  declarations: [PaysComponent, PaysDetailComponent, PaysUpdateComponent, PaysDeleteDialogComponent],
  entryComponents: [PaysDeleteDialogComponent],
})
export class ReferentielmsPaysModule {}
