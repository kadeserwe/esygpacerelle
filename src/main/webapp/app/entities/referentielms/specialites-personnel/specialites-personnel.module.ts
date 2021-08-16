import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { SpecialitesPersonnelComponent } from './specialites-personnel.component';
import { SpecialitesPersonnelDetailComponent } from './specialites-personnel-detail.component';
import { SpecialitesPersonnelUpdateComponent } from './specialites-personnel-update.component';
import { SpecialitesPersonnelDeleteDialogComponent } from './specialites-personnel-delete-dialog.component';
import { specialitesPersonnelRoute } from './specialites-personnel.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(specialitesPersonnelRoute)],
  declarations: [
    SpecialitesPersonnelComponent,
    SpecialitesPersonnelDetailComponent,
    SpecialitesPersonnelUpdateComponent,
    SpecialitesPersonnelDeleteDialogComponent,
  ],
  entryComponents: [SpecialitesPersonnelDeleteDialogComponent],
})
export class ReferentielmsSpecialitesPersonnelModule {}
